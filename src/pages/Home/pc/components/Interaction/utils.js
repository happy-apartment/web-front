import * as d3 from 'd3';
import {n} from './constants';

export var textTween = (a, b) => {
    const formatNumber = d3.format(".2f");
    const i = d3.interpolateNumber(a, b);

    return function(t) {
        this.textContent = formatNumber(i(t));
    };
};


export const createInteractionDataset = async (priceData, weight) => {

    // Bar Chart
    const dateValues = await makeDateValues(priceData, weight);
    const names = await makeNames(priceData);
    const ranks = await makeRanks(names);
    const keyFrames = await makeKeyFrames(dateValues, ranks);

    return ({
        keyFrames: keyFrames,
    });
};

/**
 * Related to Bar Chart
 */

const makeDateValues = (data, weight) => {

    console.log(weight);

    var tmp = Object.values(data).map(d => {
        const sum = (weight.hlt + weight.saf + weight.env + weight.eco + weight.edu + weight.rel + weight.hby);

        const happy = (
            ((weight.hlt/sum) * +d.health)
            + ((weight.saf/sum) * +d.safe)
            + ((weight.env/sum) * +d.env)
            + ((weight.eco/sum) * +d.eco)
            + ((weight.edu/sum) * +d.edu)
            + ((weight.rel/sum) * +d.relation)
            + ((weight.hby/sum) * +d.hobby) + (+d.satisfy)) * 100;
        return {
            date: d.date,
            name: d.name,
            category: d.category,
            happy: happy,
        }
    });

    return(
        Array.from(d3.rollup(tmp, ([d]) => d.happy, d => d.date, d => d.name))
            .map(([date, data]) => [new Date(date), data])
            .sort(([a], [b]) => d3.ascending(a, b))
    );
};

const makeNames = (data) => {
    return new Set(data.map(d => d.name))
};

const makeRanks = (names) => {
    var rank = value => {
        const data = Array.from(names, name => ({name, happy: value(name)}));
        data.sort((a, b) => d3.descending(a.happy, b.happy));
        for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
        return data;
    };
    return rank;
};

const makeKeyFrames = (dateValues, rank) => {

    const keyframes = [];
    let ka = dateValues[0][0];
    let a = dateValues[0][1];
    keyframes.push([
        new Date(ka),
        rank(name => (a.get(name) || 0))
    ]);

    return keyframes;
};


export var createColorScale = (data) => {

    const colors = ['#4770B3','#50AED3', '#9E9EA2','#fc9595', '#fe5050'];

    const scale = d3.scaleOrdinal()
        .domain(['area-1', 'area-2', 'area-3', 'area-4', 'area-5'])
        .range(colors);

    if (data.some(d => d.category !== undefined)) {
        const categoryByName = new Map(data.map(d => [d.name, d.category]));
        scale.domain(categoryByName.values());
        return d => scale(categoryByName.get(d.name));
    }

    return d => scale(d.name);
};


