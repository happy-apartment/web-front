import { x, y, n } from './constants';

const Bars = (svg, index, color) => {

    let bar = svg.select("#barchart-bar-g")
        // .attr("fill-opacity", 0.7)
        .attr("fill-opacity", 0.9)
        .selectAll("rect");

    return ([date, data], transition, prev, next) =>
    {
        bar = bar.data(data.slice(0, n), d => d.name)
            .join(
                enter => enter.append("rect")
                .attr("fill", color)
                    .attr("height", y.bandwidth())
                    .attr("x", function () {
                        return x(0)
                    })
                    .attr("y", function(d) {
                        var yStart = index === 1 ? d.rank : (prev.get(d) || d).rank;
                        return y(yStart)
                    })
                    .attr("width", function(d) {
                        var widthStart = index === 1 ? 0 : x((prev.get(d) || d).value) - x(0);
                        return widthStart
                    }),
                update => update,
                exit => exit.transition(transition).remove()
                    .attr("y", function (d) { return y((next.get(d) || d).rank)})
                    .attr("width", function (d) { return x((next.get(d) || d).value) - x(0)})
            )
            .call(bar => bar.transition(transition)
                .attr("y", d => y(d.rank))
                .attr("width", d => x(d.value) - x(0)));
    }
};

export default Bars;