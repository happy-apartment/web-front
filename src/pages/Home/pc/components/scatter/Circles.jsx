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
                    .attr("r", '0.8vh')
                    .call(circle => circle.transition(transition)
                        // .attr("fill-opacity", 0.8)),
                        .attr("fill-opacity", 1.0)),
                update => update
                    .attr("fill", color)
                    .attr('fill-opacity', 0.0)
                    .attr("cx", function (d) { return x(formatNumberX(d.value)); })
                    .attr("cy", function (d) { return y(formatNumberY(d.price)); })
                    .attr("r", '0.5vh')
                    .call(circle => circle.transition(transition)
                        .attr("fill-opacity", 0.9)),
                        // .attr("fill-opacity", 0.8)),
                exit => exit.transition(transition).remove()
            )
    }
};

export default Circles;
