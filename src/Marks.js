import React from 'react';

export const Marks = ({ data, radius, yScale, xScale, yValue, xValue, tooltipFormat  }) => data.map((d, i) => (
  <circle
    className="mark"
    key={i + '-' + yValue(d)}
    cx={xScale(xValue(d))}
    cy={yScale(yValue(d))}
    r={radius}
  >
    <title>{tooltipFormat(xValue(d))}</title>
  </circle>
))