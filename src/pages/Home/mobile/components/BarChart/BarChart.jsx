import React, {useCallback, useEffect, useMemo, useState} from 'react';
import * as d3 from 'd3';
import { makeStyles } from "@material-ui/core";

import Bars from './Bars';
import Axis from './Axis';
import Labels from './Labels';
import ValueLabels from './ValueLabels';

import {duration, x, margin } from './constants';
import { createDataset, createColorScale } from './utils';
import { priceData, happyData } from '../../../../../data';
import Remark from '../Remark/Remark';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        // position: 'relative',
        // width: `${width}`,
        // height: `${height}`,
    },

    barSvg: {
        display: 'block',
        marginTop: `${margin.top}`,
        marginBottom: `${margin.bottom}`,
        marginLeft: `${margin.left}`,
        marginRight: `${margin.right}`,
        overflow: 'visible'
    },

    // unit: {
    //     fontSize:'0.5rem',
    //     float:'right',
    //     transform:'translate(-15vw, -1vh)'
    // }

}));

const BarChart = ({index}) => {

    const classes = useStyles();

    const result = useMemo(() => createDataset(priceData, happyData),[]);
    const color = useMemo(() => createColorScale(priceData), []);

    useEffect(() => {
        const svg = d3.select('#barchart-svg');

        const transition = svg.transition()
            .duration(duration)
            .ease(d3.easeLinear);

        const updateBars = Bars(svg, index, color);
        const updateAxis = Axis(svg);
        const updateLabels = Labels(svg, index);
        const updateValueLabels = ValueLabels(svg, index);

        result.then((dataObject)=> {

            const { keyFrames, prev, next } = dataObject;

            if (index === 1) {
                x.domain([0, keyFrames[0][1][0].value]);
                console.log("x:", x(179));

                const priceKeyFrame = keyFrames[0];
                updateAxis(priceKeyFrame, transition);
                updateBars(priceKeyFrame, transition, prev, next);
                updateLabels(priceKeyFrame, transition, prev, next);
                updateValueLabels(priceKeyFrame, transition, prev, next);

            } else {
                x.domain([0, keyFrames[keyFrames.length-1][1][0].value]);

                for (const keyframe of keyFrames) {
                    updateAxis(keyframe, transition);
                    updateBars(keyframe, transition, prev, next);
                    updateLabels(keyframe, transition, prev, next);
                    updateValueLabels(keyframe, transition, prev, next);

                }
            }
        }, (err) => console.log(err))
    }, [index]);

    return (
        <div className={classes.wrapper} id="barchart-wrapper">
            {/*<div className={classes.unit} id="barchart-unit">{index === 1 ? '(단위: 천만원)' : '행복지수 (0~100)'}</div>*/}
            <svg className={classes.barSvg} id="barchart-svg">
                <g id="barchart-axis-g"></g>
                <g id="barchart-bar-g"></g>
                <g id="barchart-label-g"></g>
                <g id="barchart-value-label-g"></g>
            </svg>
            <Remark id="barchart-remark"/>
        </div>

    )
};

export default BarChart;