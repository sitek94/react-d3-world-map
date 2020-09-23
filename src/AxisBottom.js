import React from 'react';

export const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) => xScale.ticks().map(tickValue => (
  <g 
    className="tick"
    key={tickValue}
    transform={`translate(${xScale(tickValue)}, 0)`} 
  >
    <line y2={innerHeight} stroke="black" />
    <text 
      y={innerHeight + tickOffset} 
      dy=".71em"
      textAnchor="middle"
    >
      {tickFormat(tickValue)}
    </text>
  </g>
))