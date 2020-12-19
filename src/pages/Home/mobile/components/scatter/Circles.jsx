import * as d3 from 'd3';

import { n, x, y } from './constants';

const Circles = (svg, color) => {
    let circle = svg.select("#scatter-circles-g")
        .attr("fill-opacity", 0.3)
        // .attr("fill-opacity", 0.3)
        .selectAll("circle");

    const formatNumberX = d3.format(".4f");
    const formatNumberY = d3.format(".2f");

    return (data, transition) =>
    {
        circle = circle.data(data.slice(0, n), d=>d.name)
            .join(
                enter => enter.append("circle")
                    .attr("fill", color)
                    .attr('fill-opacity', 0.0)
                    .attr("cx", function (d) { return x(formatNumberX(d.value)); })
                    .attr("cy", function (d) { return y(formatNumberY(d.price)); })
                    .attr("r", '0.8vw')
                    .on('mouseover', function (d, i) {
                        d3.select(this).transition()
                            .duration('100')
                            .attr("r", '1vw');
                        //Makes div appear
                        // div.transition()
                        //     .duration(100)
                        //     .style("opacity", 1);
                    })
                    .on('mouseout', function (d, i) {
                        d3.select(this).transition()
                            .duration('200')
                            .attr("r", '0.8vw');
                        //makes div disappear
                        // div.transition()
                        //     .duration('200')
                        //     .style("opacity", 0);
                    })
                    .call(circle => circle.transition(transition)
                        // .attr("fill-opacity", 0.8)),
                        .attr("fill-opacity", 1.0)),
                update => update
                    .attr("fill", color)
                    .attr('fill-opacity', 0.0)
                    .attr("cx", function (d) { return x(formatNumberX(d.value)); })
                    .attr("cy", function (d) { return y(formatNumberY(d.price)); })
                    .attr("r", '0.8vw')
                    .call(circle => circle.transition(transition)
                        .attr("fill-opacity", 0.9)),
                        // .attr("fill-opacity", 0.8)),
                exit => exit.transition(transition).remove()
            )

    }
};

export default Circles;
