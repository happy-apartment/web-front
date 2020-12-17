import * as d3 from "d3";

const n = 25;

export const createDataset = async (priceData) => {

    // Scatter
    const data = await makeData(priceData);
    const priceMin = await calculatePriceMin(data);
    const priceMax = await calculatePriceMax(data);

    return ({
        // names: names,
        data: data,
        priceMin: priceMin,
        priceMax: priceMax,
    });
};

const makeData = (data) => {

    const tmpData = [];

    for (let i = 0; i < data.length; i++) {
        if (i < n) {
            tmpData[i] = {
                name: data[i].name,
                category: data[i].category,
                price: data[i].value,
                // 여기 수정5
                env: data[i].env,
                hobby: data[i].hobby,
                safe: data[i].safe,
                edu: data[i].edu,
                relation: data[i].relation,
                eco: data[i].eco,
                health: data[i].health
            };
        }
    }
    return tmpData;
};

const calculatePriceMax = (data) => {
    return d3.max(data, d => +d.price);
};

const calculatePriceMin = (data) => {
    return d3.min(data, d => +d.price);
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

