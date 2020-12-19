import * as d3 from "d3";

export const n = 25;
export const k = 10;
export const duration = 3000;

export const width = 340;
export const barSize = 15;
export const margin = {top: 10, right: 3, bottom: 3, left: 0};

export const height = margin.top + barSize * n + margin.bottom;

export const x = d3.scaleLinear()
    .domain([0, 1])
    .range([margin.left, width - margin.right]);

export const y = d3.scaleBand()
    .domain(d3.range(n + 1))
    .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
    .padding(0.1);