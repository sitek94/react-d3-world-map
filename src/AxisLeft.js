import React from 'react';

export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue) => (
    <g
      key={tickValue} 
      className="tick"
      transform={`translate(0, ${yScale(tickValue)})`}
    >
      <line x2={innerWidth} stroke="black" />
      <text
        x={-tickOffset}
        dy=".32em"
        textAnchor="end"
      >
        {tickValue}
      </text>
    </g>
  ));
