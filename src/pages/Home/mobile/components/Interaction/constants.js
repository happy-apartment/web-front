import * as d3 from "d3";

export const n = 25;
export const k = 10;
export const duration = 3000;

export const width = 700;
export const barSize = 25;
export const margin = {top: 16, right: 6, bottom: 6, left: 0};

export const height = margin.top + barSize * n + margin.bottom;

export const x = d3.scaleLinear()
    .domain([0, 1])
    .range([margin.left, width - margin.right]);

export const y = d3.scaleBand()
    .domain(d3.range(n + 1))
    .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
    .padding(0.1);

export const UPDATE_HLT = 13;
export const UPDATE_SAF = 14;
export const UPDATE_ENV = 15;
export const UPDATE_ECO = 16;
export const UPDATE_EDU = 17;
export const UPDATE_REL = 18;
export const UPDATE_HBY = 19;
export const UPDATE_INIT = 20;
