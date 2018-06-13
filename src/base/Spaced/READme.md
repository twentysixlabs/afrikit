# Spaced

React component for applying responsive margin and padding to child elements without a wrapping HTML container.

```js
import React from 'react';
import { Spaced } from 'afrikit';

// Apply margin to child components without a wrapping <div>
const App = props => (
  <Spaced mx={3} my={[2, 3]}>
    <h1>Hello</h1>
    <h2>Hi</h2>
    <button>Beep</button>
  </Spaced>
);
```

## Props

The Spaced component uses `space` utility to add margin and padding props.

| Prop | Description                     | Type                     |
| ---- | ------------------------------- | ------------------------ |
| `m`  | margin                          | number, string, or array |
| `mt` | margin-top                      | number, string, or array |
| `mr` | margin-right                    | number, string, or array |
| `mb` | margin-bottom                   | number, string, or array |
| `ml` | margin-left                     | number, string, or array |
| `mx` | margin x-axis (left and right)  | number, string, or array |
| `my` | margin y-axis (top and bottom)  | number, string, or array |
| `p`  | padding                         | number, string, or array |
| `pt` | padding-top                     | number, string, or array |
| `pr` | padding-right                   | number, string, or array |
| `pb` | padding-bottom                  | number, string, or array |
| `pl` | padding-left                    | number, string, or array |
| `px` | padding x-axis (left and right) | number, string, or array |
| `py` | padding y-axis (top and bottom) | number, string, or array |