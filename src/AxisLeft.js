import React from 'react';

export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue) => (
    <g
      key={tickValue} 
      className="tick"
    >
      <text

        x="-6"
        dy=".32em"
        y={yScale(tickValue) + +(yScale.bandwidth() / 2)}
        textAnchor="end"
      >
        {tickValue}
      </text>
    </g>
  ));
