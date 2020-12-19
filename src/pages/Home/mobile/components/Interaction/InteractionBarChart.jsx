import * as d3 from 'd3';
import { height, duration, x } from './constants';
import React, { useEffect, useMemo} from "react";
import Bars from "./Bars";
import Axis from "./Axis";
import Labels from "./Labels";
import ValueLabels from "./ValueLabels";
import { createInteractionDataset, createColorScale } from "./utils";
import Remark from "../Remark/Remark";
import { priceData } from '../../../../../data';
import {makeStyles} from "@material-ui/core";
import {width} from "../BarChart/constants";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'absolute',
    },

    interBarSvg: {
        width: `${width}px`,
        height: `${height}px`,
    },

    unit: {
        fontSize:'0.5rem',
        // transform:'translate(-15vw, -3px)'
    }

}));

const InteractionBarChart = ({weight}) => {

    const classes = useStyles();

    const color = useMemo(() => createColorScale(priceData), []);

    const result = useMemo(() => createInteractionDataset(priceData, weight), [weight]);

    useEffect(() => {

        const svg = d3.select('#inter-barchart-svg');

        const transition = svg.transition()
            .duration(duration)
            .ease(d3.easeLinear);

        const updateBars = Bars(svg, color);
        const updateAxis = Axis(svg);
        const updateLabels = Labels(svg);
        const updateValueLabels = ValueLabels(svg);

        result.then((dataObject)=> {

            const {keyFrames} = dataObject;

            console.log("happy:", keyFrames);
            console.log("happy:", keyFrames[0][1][0].happy);

            x.domain([0, keyFrames[0][1][0].happy]);

            const happyKeyFrame = keyFrames[0];
            updateAxis(happyKeyFrame, transition);
            updateBars(happyKeyFrame, transition);
            updateLabels(happyKeyFrame, transition);
            updateValueLabels(happyKeyFrame, transition);

        }, (err) => console.log(err))
    }, [weight]);

    return (
        <div className={classes.wrapper} id="inter-barchart-wrapper">
            <div className={classes.unit} id="inter-barchart-unit">행복지수 (0~100)</div>
            <svg className={classes.interBarSvg} id="inter-barchart-svg">
                <g id="inter-barchart-axis-g"></g>
                <g id="inter-barchart-bar-g"></g>
                <g id="inter-barchart-label-g"></g>
                <g id="inter-barchart-value-label-g"></g>
            </svg>
            <Remark/>
        </div>

    )
};

export default InteractionBarChart;