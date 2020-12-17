import * as d3 from 'd3';

import { width, height, x } from './constants';

const Xaxis = (svg) => {
    const g = svg.select("#scatter-x-axis-g")
        .attr('fill-opacity', 0.7)
        .attr("transform", `translate(0, ${height / 2})`);

    const axis = d3.axisBottom(x)
        .ticks(width / 100)
        .tickSizeOuter(0);
        // .tickSizeInner(-barSize * (n + y.padding()));

    return (_, transition) => {
        g.transition(transition).call(axis);
        // g.select(".tick:first-of-type text").remove();
        g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "gray");
        // g.select(".domain").remove();
    };

};


export default Xaxis;