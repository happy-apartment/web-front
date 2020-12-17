import { n } from './constants';
import { x, y } from './constants';

const Bars = (svg, color) => {

    let bar = svg.select("#inter-barchart-bar-g")
        // .attr("fill-opacity", 0.7)
        .attr("fill-opacity", 0.9)
        .selectAll("rect");

    return ([date, data], transition) =>
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
                        var yStart = d.rank;
                        return y(yStart)
                    })
                    .attr("width", function(d) {
                        return 0;
                    }),
                update => update,
                exit => exit.transition(transition).remove()
                    .attr("y", function (d) { return y(d.rank)})
                    .attr("width", function (d) { return x(d.happy) - x(0)})
            )
            .call(bar => bar.transition(transition)
                .attr("y", d => y(d.rank))
                .attr("width", d => x(d.happy) - x(0)));
    }
};

export default Bars;