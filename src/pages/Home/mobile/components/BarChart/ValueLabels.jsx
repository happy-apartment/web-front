import { n, x, y } from './constants';
import { textTween } from "./utils";

const ValueLabels = (svg, index) => {

    let label = svg.select("#barchart-value-label-g")
        .attr('font-style', 'normal')
        .attr('font-weight', '800')
        // .attr('font-size', '1rem')
        .attr('font-size', '0.6rem')
        .attr('font-family', 'sans-serif')
        .style("font-variant-numeric", "tabular-nums")
        .attr("text-anchor", "end")
        .selectAll("text");

    return ([date, data], transition, prev, next) => label = label
        .data(data.slice(0, n), d => d.name)
        .join(
            enter => enter.append("text")
                .attr("transform", d => `translate(30, ${y((prev.get(d) || d).rank)})`)
                .attr("y", y.bandwidth() - 3)
                .attr("x", -6)
                .call(text => text.append("tspan")
                    .attr("fill-opacity", 0.7)
                    .attr("font-weight", "800")
                    .attr("transform", d => `translate(${x(d.value)},${y(d.rank)})`)),
            update => update,
            exit => exit.transition(transition).remove()
                .attr("transform", d => `translate(${x((next.get(d) || d).value)},${y((next.get(d) || d).rank)})`)
                .call(g => g.select("tspan").tween("text", d => textTween(d.value, (next.get(d) || d).value)))
        )
        .call(bar => bar.transition(transition)
            .attr("transform", d => `translate(${x(d.value)},${y(d.rank)})`)
            .call(g => g.select("tspan").tween("text", d => textTween((prev.get(d) || d).value, d.value)))
        )

};

export default ValueLabels;

