import React from 'react';
import { scaleLinear, extent, format } from 'd3';

import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

// Variables
const width = window.innerWidth;
const height = window.innerHeight;
const margin = {
  top: 50,
  right: 50,
  bottom: 80,
  left: 100,
};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const xAxisLabelOffset = 60;
const yAxisLabelOffset = 50;


export const App = () => {
  // Fetch data using custom hook
  const data = useData();

  if (!data) return <pre>Loading...</pre>;
  
  // Values accessors
  const xValue = (d) => d.sepal_length;
  const xAxisLabel = 'Sepal Length';
  const yValue = (d) => d.sepal_width;
  const yAxisLabel = 'Sepal Width';

  // x axis tick formatter 
  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');
  
  // x scale
  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  // y scale
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])
    .nice();

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={10}
        />
        <AxisLeft 
          yScale={yScale} 
          innerWidth={innerWidth}
          tickOffset={5}
        />
        <text 
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <text 
          className="axis-label"
          x={innerWidth / 2} 
          y={innerHeight + xAxisLabelOffset} 
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          data={data}
          radius={10}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};
