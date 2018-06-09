// @flow
import get from 'lodash.get';
import at from 'lodash.at';
import values from 'lodash.values';
import difference from 'lodash.difference';

import type { Needle } from '.';

/**
 * Returns `pass` if prop is truthy. Otherwise returns `fail`
 * @example
 * // usage with styled-theme
 * import styled from "styled-components";
 * import { ifProp, toColor } from "afrikit";
 *
 * const Button = styled.button`
 *   background-color: ${ifProp("transparent", "transparent", palette(0))};
 *   color: ${ifProp(["transparent", "accent"], toColor("red", 0))};
 * `;
 */
const ifProp = (
  testItem: Needle | string[] | Object,
  pass?: any,
  fail?: any,
): any => (props: Object = {}): any => {
  let result;
  if (Array.isArray(testItem)) {
    result = !at(props, testItem).filter(value => !value).length;
  } else if (typeof testItem === 'function') {
    result = testItem(props);
  } else if (typeof testItem === 'object') {
    const testItemKeys = Object.keys(testItem);
    const testItemValues = values(testItem);
    result = !difference(at(props, testItemKeys), testItemValues).length;
  } else {
    result = get(props, testItem);
  }
  return result ? pass : fail;
};

export default ifProp;
