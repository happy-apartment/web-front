import { n, x, y } from './constants';
import { textTween } from "./utils";

const Labels = (svg, index) => {

    let label = svg.select("#barchart-label-g")
        .attr('font-style', 'normal')
        .attr('font-weight', '600')
        .attr('font-size', '12px')
        .attr('font-family', 'sans-serif')
        .style("font-variant-numeric", "tabular-nums")
        .attr("text-anchor", "start")
        .selectAll("text");

    return ([date, data], transition, prev, next) => label = label
        .data(data.slice(0, n), d => d.name)
        .join(
            enter => enter.append("text")
                .attr("transform", d => `translate(0, ${y((prev.get(d) || d).rank)})`)
                .attr("y", y.bandwidth() - 3)
                .attr("x", 6)
                .text(d => d.name)
                .call(text => text.append("tspan")
                    .attr("fill-opacity", 0.7)
                    .attr("font-weight", "bold")
                    .attr("transform", d => `translate(${x(d.value)},${y(d.rank)})`)),
            update => update,
            exit => exit.transition(transition).remove()
                .attr("transform", d => `translate(${x((next.get(d) || d).value)},${y((next.get(d) || d).rank)})`)
        )
        .call(bar => bar.transition(transition)
            .attr("transform", d => `translate(0, ${y(d.rank)})`)
        )

};

export default Labels;


