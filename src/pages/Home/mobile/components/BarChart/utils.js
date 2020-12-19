import * as d3 from 'd3';
import { n, k } from './constants';

export const createDataset = async (priceData, happyData) => {

    // Bar Chart
    const dateValues = await makeDateValues(priceData, happyData);
    const names = await makeNames(priceData);
    const ranks = await makeRanks(names);
    const keyFrames = await makeKeyFrames(dateValues, ranks);
    const nameFrames = await makeNameFrames(keyFrames);
    const prev = await makePrev(nameFrames);
    const next = await makeNext(nameFrames);

    return ({
        keyFrames: keyFrames,
        prev: prev,
        next: next,
    });
};

/**
 * Related to Bar Chart
 */

const makeDateValues = (priceData, happyData) => {
    const totalData = Array.from(d3.rollup(priceData, ([d]) => d.value, d => d.date, d => d.name)).concat(
        Array.from(d3.rollup(happyData, ([d]) => d.value, d => d.date, d => d.name))
    );

    return(
        totalData
            .map(([date, data]) => [new Date(date), data])
            .sort(([a], [b]) => d3.ascending(a, b))
    );
};

const makeNames = (priceData) => {
    return new Set(priceData.map(d => d.name))
};

const makeRanks = (names) => {
    var rank = value => {
        const data = Array.from(names, name => ({name, value: value(name)}));
        data.sort((a, b) => d3.descending(a.value, b.value));
        for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
        return data;
    };
    return rank;
};

const makeKeyFrames = (dateValues, rank) => {

    const keyframes = [];
    let ka, a, kb, b;

    for ([[ka, a], [kb, b]] of d3.pairs(dateValues)) {

        for (let i = 0; i < k; ++i) {
            const t = i / k;
            keyframes.push([
                new Date(ka * (1 - t) + kb * t),

                rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
            ]);
        }
    }
    keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
    return keyframes;
};

const makeNameFrames = (keyframes) => {
    return d3.groups(keyframes.flatMap(([, data]) => data), d => d.name)
};

const makePrev = (nameFrames) => {
    return new Map(nameFrames.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])))
};

const makeNext = (nameFrames) => {
    return new Map(nameFrames.flatMap(([, data]) => d3.pairs(data)))
};


export var textTween = (a, b) => {
    const formatNumber = d3.format(".1f");
    const i = d3.interpolateNumber(a, b);

    return function(t) {
        this.textContent = formatNumber(i(t));
    };
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

