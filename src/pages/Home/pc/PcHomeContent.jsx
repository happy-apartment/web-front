import React, {useEffect, useMemo, useCallback, useContext, useState} from 'react';
import { makeStyles } from "@material-ui/core";
import PcHomeSection from './components/PcHomeSection';
import { titles, descriptions } from './texts/content-text';
import {IndexContext, InteractionContext} from './PcHome';
import * as d3 from 'd3';
import {UPDATE_INDEX} from "../../../constants";
import {Interaction} from "./components/Interaction";
import {UPDATE_INIT} from "./components/Interaction/constants";

const useStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor: "#45BD20",
        width: "30vw",
        minWidth: "470px",
        maxWidth: "500px",
        height: "500px",
        display: "inline-block",
    },

    wrapper: {
        // backgroundColor: "#123456",
        paddingTop: "2vw",
        paddingLeft: "1.5vw",
        paddingRight: "1.5vw",
        marginBottom: "300px",
    },

    extra: {
        height: "300px",
    }
}));

let container;
let sections;
let sectionPositions;
let currentIndex;
let containerStart;

const PcHomeContent = ({callback}) => {
    const classes = useStyles();

    const { indexState, indexDispatch } = useContext(IndexContext);

    function resize() {
        // sectionPositions will be each sections
        // starting position relative to the top
        // of the first section.
        sectionPositions = [];
        var startPos;
        sections.each(function (d, i) {
            var top = this.getBoundingClientRect().top;
            if (i === 0) {
                startPos = top;
            }
            sectionPositions.push(top - startPos);
        });
        containerStart = container.node().getBoundingClientRect().top + window.pageYOffset;
    }

    function position() {
        var pos = window.pageYOffset - 10 - containerStart;
        var sectionIndex = d3.bisect(sectionPositions, pos);
        sectionIndex = Math.min(sections.size() - 1, sectionIndex);

        // console.log("position")
        // console.log("current index:", currentIndex)
        // console.log("section index:", sectionIndex)
        if (currentIndex !== sectionIndex) {
            // @v4 you now `.call` the indexDispatch callback
            handleScroll(sectionIndex);
            currentIndex = sectionIndex;
        }
    }

    const handleScroll = useCallback((index) => {
        d3.selectAll('.step')
            .style('opacity', function (d, i) { return i === index ? 1 : 0.0; });
        indexDispatch({type: UPDATE_INDEX, data: index})
    }, []);

    useEffect(() => {
        container = d3.select('#section-wrapper');
        sections = d3.selectAll('.step');
        sectionPositions = [];
        currentIndex = -1;
        containerStart = 0;
    }, []);

    useEffect(() => {
        resize();
        position();
    }, []);

    useEffect(() => {
        window.addEventListener('mousewheel', position);
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('mousewheel', position);
            window.removeEventListener('resize', resize);
        };
    });

    const sectionsContent = useMemo(() => {
        return titles.filter((d, i) => {return i < titles.length - 1}).map((t, i) => <PcHomeSection key={i} title={t} descriptions={descriptions[i]} isInter="0"/>)
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.wrapper} id="section-wrapper">
                {sectionsContent}
                <PcHomeSection key={titles.length - 1} title={titles[titles.length - 1]} descriptions={descriptions[titles.length - 1]} isInter="1" callback={callback} />
            </div>

            <div className={classes.extra}> </div>
        </div>
    )
};

export default PcHomeContent;