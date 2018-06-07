// @flow
import { theme } from '../../theme';
import { is } from './util-helpers';

/**
 * Returns the value of `props.theme[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${pT("color", "red")};
 * `;
 */
const pT = (path: string, defaultValue?: any): any => (props: Object = {}) => {
  const thetheme = props.theme || theme;
  if (thetheme[path]) {
    return thetheme[path];
  }
  return is(defaultValue) ? defaultValue : '';
};

export default pT;

// Alternate implementation
// import get from 'lodash.get';
//
// const thetheme = props.theme || theme;
// return get(thetheme, path, defaultValue);
