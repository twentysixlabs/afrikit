// @flow
import React from 'react';
import { sys } from '../../theme';

const DonutBase = props => {
  // eslint-disable-next-line
  const R = 16 - props.strokeWidth;
  const C = 2 * Math.PI * R;
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      // eslint-disable-next-line
      width={props.size || 128}
      height={props.size || 128}
    >
      <circle
        cx={16}
        cy={16}
        r={R}
        fill="none"
        stroke="currentcolor"
        strokeWidth={props.strokeWidth}
        opacity="0.125"
      />
      <circle
        cx={16}
        cy={16}
        r={R}
        fill="none"
        stroke="currentcolor"
        strokeWidth={props.strokeWidth}
        strokeDasharray={C}
        // eslint-disable-next-line
        strokeDashoffset={C - props.value * C}
        transform="rotate(-90 16 16)"
      />
    </svg>
  );
};

export const Donut = sys(
  {
    is: DonutBase,
    color: 'blue',
    strokeWidth: 2,
    value: 1,
  },
  'space',
  'color',
);

Donut.displayName = 'Donut';

export default Donut;
