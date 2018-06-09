// @flow
import get from 'lodash.get';
import type { Needle } from '.';

// Note To Self: Faster alternative than ifProp. No checks. Assume prop string.

/**
 * Returns `pass` if prop is truthy. Otherwise returns `fail`
 * @example
 * import styled from "styled-components";
 * import { ifPrp } from "afrikit";
 *
 * const Button = styled.button`
 *   background-color: ${ifProp("transparent", "transparent", "red")};
 * `;
 */
const ifPrp = (testItem: Needle, pass?: any, fail?: any): any => (
  props: Object = {},
): any => {
  const result = get(props, testItem);
  return result ? pass : fail;
};

export default ifPrp;
