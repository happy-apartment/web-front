import * as d3 from 'd3';

import { width, y } from './constants';

const Yaxis = (svg) => {
    const g = svg.select("#scatter-y-axis-g")
        .attr("transform", `translate(${width / 2}, 0)`);

    const axis = d3.axisLeft(y)
        .ticks(width / 100)

    // .tickSizeOuter(0);
    // .tickSizeInner(-barSize * (n + y.padding()));

    return (_, transition) => {
        g.transition(transition).call(axis);
        // g.select(".tick:first-of-type text").remove();
        g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "black");
        // g.select(".domain").remove();
    };

};


export default Yaxis;
