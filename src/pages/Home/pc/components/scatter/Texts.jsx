import * as d3 from 'd3';

import { n, x, y } from './constants';

const Texts = (g) => {
    let text = g.select("#scatter-texts-g")
        .attr("fill-opacity", 0.3)
        .selectAll("text");

    const formatNumber = d3.format(".2f");

    return (data, transition) =>
    {
        text = text.data(data.slice(0, n))
            .join(
                enter => enter
                    .append("text")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", '0.5rem')
                    .attr("fill","black")
                    .attr("fill-opacity", 0.0)
                    .attr("font-weight","600")
                    // 여기 수정2
                    .attr("x",function (d) { return x(formatNumber(d.value)) + 2; })
                    .attr("y",function (d) { return y(formatNumber(d.price)) - 1; })
                    .text(d=>d.name)
                    .call(text => text.transition(transition)
                        .attr("fill-opacity", 0.8)),
                update => update
                    .attr("fill-opacity", 0.0)
                    // 여기 수정2
                    .attr("x",function (d) { return x(formatNumber(d.value)) + 2; })
                    .attr("y",function (d) { return y(formatNumber(d.price)) - 1; })
                    .text(d=>d.name)
                    .call(text => text.transition(transition)
                            .attr("fill-opacity", 0.8)),
                exit => exit.transition(transition).remove()
            )

    }
};

export default Texts;
