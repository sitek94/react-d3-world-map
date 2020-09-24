import React from 'react';

export const Marks = ({ data }) => data.map((d, i) => (
  <circle
    className="mark"
  />

))