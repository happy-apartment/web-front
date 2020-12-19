import React, {useEffect, useMemo, useCallback, useContext, useState} from 'react';
import { makeStyles } from "@material-ui/core";
import { IndexContext } from "./MobileHome";
import * as d3 from "d3";
import {UPDATE_INDEX} from "../../../constants";
import {titles} from "./texts/content-text";
import ScrollCircle from "./components/scrollCircle/ScrollCircle";


const useStyles = makeStyles((theme) => ({
    container: {
        width: "3vw",
        height: "auto",

    },

    wrapper: {
    },

    extra: {
        height: "70vh",
    }
}));

let container;
let sections;
let sectionPositions;
let currentIndex;
let containerStart;


const MobileHomeScroller = ({callback}) => {

    const classes = useStyles();

    const { indexState, indexDispatch } = useContext(IndexContext);

    function resize() {
        // sectionPositions will be each sections starting position relative to the top
        // of the first section.
        sectionPositions = [];

        let startPos;

        sections.each(function (d, i) {
            const top = this.getBoundingClientRect().top;

            if (i === 0) {
                startPos = top;
            }
            sectionPositions.push(top - startPos);
        });
        containerStart = container.node().getBoundingClientRect().top + window.pageYOffset;
    }

    function position() {
        var pos = window.pageYOffset - containerStart;
        var sectionIndex = d3.bisect(sectionPositions, pos);
        sectionIndex = Math.min(sections.size() - 1, sectionIndex);

        if (currentIndex !== sectionIndex) {
            handleScroll(sectionIndex);
            currentIndex = sectionIndex;
        }
    }

    const handleScroll = useCallback((index) => {
        d3.selectAll('.scroll-circles')
            .style('opacity', function (d, i) { return i === index ? 0.8 : 0.1; });
        indexDispatch({type: UPDATE_INDEX, data: index})
    }, []);

    useEffect(() => {
        container = d3.select('#scroll-wrapper');
        sections = d3.selectAll('.scroll-circles');
        sectionPositions = [];
        currentIndex = -1;
        containerStart = 0;
    }, []);

    useEffect(() => {
        resize();
        position();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', position);
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('scroll', position);
            window.removeEventListener('resize', resize);
        };
    });

    const sectionCircles = useMemo(() => {
        return titles.map((t, i) => <ScrollCircle key={i} />)
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.wrapper} id="scroll-wrapper">
                {sectionCircles}
            </div>

            <div className={classes.extra}> </div>
        </div>
    )
};

export default MobileHomeScroller;