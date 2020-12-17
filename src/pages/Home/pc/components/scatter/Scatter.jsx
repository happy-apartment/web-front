import React, {useEffect, useMemo} from 'react';
import { makeStyles } from "@material-ui/core";
import * as d3 from "d3";

import Xaxis from "./Xaxis";
import Yaxis from "./Yaxis";
import Circles from "./Circles";
import Texts from "./Texts";

import {y, margin, width, height, duration} from './constants';
import { createDataset, createColorScale } from './utils';
import { priceData } from '../../../../../data';

import {
    ECO_SCATTER,
    EDU_SCATTER,
    ENV_SCATTER,
    HBY_SCATTER,
    HLT_SCATTER,
    REL_SCATTER,
    SAF_SCATTER
} from "../../../../../constants";


const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'absolute',
    },

    scatterSvg : {
        width: `${width + margin.left + margin.right}px`,
        height: `${height + margin.top + margin.bottom}px`,
    },

}));


const Scatter = ({index}) => {

    const classes = useStyles();

    const result = useMemo(() => createDataset(priceData),[]);
    const color = useMemo(() => createColorScale(priceData), []);

    useEffect(() => {

        const svg = d3.select('svg#scatter-svg');

        const transition = svg.transition()
            .duration(duration)
            .ease(d3.easeLinear);

        result.then((dataObject) => {

            y.domain([dataObject.priceMin, dataObject.priceMax]);

            const updateXaxis = Xaxis(svg);
            const updateYaxis = Yaxis(svg);
            const updateCircles = Circles(svg, color);
            const updateTexts = Texts(svg);

            let indexData = [];
            switch (index) {
                case ECO_SCATTER:
                    Object.values(dataObject.data).forEach((v, i) => {indexData[i] = {name: v.name, price: v.price, value: v.eco}});
                    break;
                case EDU_SCATTER:
                    Object.values(dataObject.data).forEach((v, i) => {indexData[i] = {name: v.name, price: v.price, value: v.edu}});
                    break;
                case ENV_SCATTER:
                    Object.values(dataObject.data).forEach((v, i) => {indexData[i] = {name: v.name, price: v.price, value: v.env}});
                    break;
                case HLT_SCATTER:
                    Object.values(dataObject.data).forEach((v, i) => {indexData[i] = {name: v.name, price: v.price, value: v.health}});
                    break;
                case HBY_SCATTER:
                    Object.values(dataObject.data).forEach((v, i) => {indexData[i] = {name: v.name, price: v.price, value: v.hobby}});
                    break;
                case REL_SCATTER:
                    Object.values(dataObject.data).forEach((v, i) => {indexData[i] = {name: v.name, price: v.price, value: v.relation}});
                    break;
                case SAF_SCATTER:
                    Object.values(dataObject.data).forEach((v, i) => {indexData[i] = {name: v.name, price: v.price, value: v.safe}});
                    break;
            }
            updateXaxis(null, transition);
            updateYaxis(null, transition);
            updateCircles(indexData, transition);
            updateTexts(indexData, transition);
        });
    }, [index]);

    return (

        <div className={classes.wrapper} id="scatter-wrapper">
            <svg className={classes.scatterSvg} id="scatter-svg">
                <g id="scatter-x-axis-g"></g>
                <g id="scatter-y-axis-g"></g>
                <g id="scatter-circles-g"></g>
                <g id="scatter-texts-g"></g>
            </svg>
        </div>

    )
};

export default Scatter;
