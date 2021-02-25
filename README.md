# scatter-plot-d3

## Package for Easily Generating Scatter Plots & Line Graphs using D3

## Basic Usage:

- `npm install -S scatter-plot-d3`

- import in code
  - `import 'd3Scatter from 'scatter-plot-d3'`
- Add canvas element to html page (d3Canvas is the default id expected)
  - `<div id='#d3Canvas' />`

- Call addScatter
  - `const data_example = [{country: 'USA', gdp: 20.8, population: 331}, {country: 'China', gdp: 14.9, population: 1406}, {country: 'Japan', gdp: 4.9, population: 126}, {country: 'Germany', gdp: 3.8, population: 83}, {country: 'France', gdp: 2.6, population: 67}]`
  - `d3Scatter.addScatter({data: data, xCol: 'gdp', yCol: 'population'})`

## Options:

- specify canvas size (defaults to 900 x 600)
  - (automatically adjusts size to fit canvas)
  - `d3Scatter({data: data, xCol: 'population', yCol: 'gdp', canvasHeight: 500, canvasWidth: 800})`

- add line / curve
  - `d3Scatter({data: data, line: true})`
  - `d3Scatter({data: data, curve: true})`
  
- specify axis labels
  - (automatically adjusts size to fit canvas)
  - `d3Scatter({data: data, xCol: 'population', yCol: 'gdp', xaxis: 'population (in Millions)', yaxis: 'GDP ($USD in millions)'})`

- specify scale
  - (overrides auto-scaling that fits plot to canvas size)
  - `d3Scatter({data: data, scale: 0.2})`

- check default settings
  - `var defaults = d3Scatter.checkDefaults()`
  - this allows you to check values like 'scale', 'maxValue' etc. if you have customized the canvas size and/or scaling
  - `var defaults = d3Scatter.checkDefaults({data: data, scale: 10, canvasHeight: 500, canvasWidth: 800})`

- embed data table in page
  - add empty element in html
  - `<div#embedDataHere />`
    - `d3Scatter.addScatter({data: data, embedData: "embedDataHere"})`
