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
 * import { ifProp } from "styled-tools";
 * import { palette } from "styled-theme";
 *
 * const Button = styled.button`
 *   background-color: ${ifProp("transparent", "transparent", palette(0))};
 *   color: ${ifProp(["transparent", "accent"], palette("secondary", 0))};
 *   font-size: ${ifProp({ size: "large" }, "20px", ifProp({ size: "medium" }, "16px", "12px"))};
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
