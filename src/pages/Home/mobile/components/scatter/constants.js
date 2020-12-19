import * as d3 from "d3";

export const n = 25;

export const margin = {top: 15, right: 15, bottom: 15, left: 15};
export const width = 350 - margin.left - margin.right;
export const height = 350 - margin.top - margin.bottom;

export const duration = 3000;

export const x = d3.scaleLinear()
    .domain([0, 1])
    .range([margin.left, width - margin.right]);

export const y = d3.scaleLinear()
    .domain([0, 70])
    .range([height-margin.bottom, margin.top]);
