import React, { useEffect, useMemo, useCallback } from 'react';
import { makeStyles } from "@material-ui/core";
import PcHomeSection from './components/PcHomeSection';
import { titles, descriptions } from './texts/content-text';

import * as d3 from 'd3';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#45BD20",
        width: "30vw",
        minWidth: "470px",
        maxWidth: "500px",
        height: "150vh",
        display: "inline-block",
    },

    wrapper: {
        // backgroundColor: "#123456",
        paddingTop: "2vw",
        paddingLeft: "1.5vw",
        paddingRight: "1.5vw",
    },
}));

let container;
let sections;
let sectionPositions;
let currentIndex;
let containerStart;

const PcHomeContent = () => {
    const classes = useStyles();

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
            // @v4 you now `.call` the dispatch callback
            handleScroll(sectionIndex);
            currentIndex = sectionIndex;
        }
    }

    const handleScroll = useCallback((index) => {
        d3.selectAll('.step')
            .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });
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
        return titles.map((t, i) => <PcHomeSection key={i} title={t} descriptions={descriptions[i]}/>)
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.wrapper} id="section-wrapper">
                {sectionsContent}
            </div>
        </div>
    )
};

export default PcHomeContent;