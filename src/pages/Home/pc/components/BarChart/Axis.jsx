import * as d3 from 'd3';
import {barSize, margin, n, width, x, y} from './constants';

const Axis = (svg) => {
    const g = svg.select("#barchart-axis-g")
        .attr("transform", `translate(0,${margin.top})`);

    const axis = d3.axisTop(x)
        .ticks(width / 100)
        .tickSizeOuter(0)
        .tickSizeInner(-barSize * (n + y.padding()));

    return (_, transition) => {
        g.transition(transition).call(axis);
        g.select(".tick:first-of-type text").remove();
        g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
        g.select(".domain").remove();
    };

};

export default Axis;
