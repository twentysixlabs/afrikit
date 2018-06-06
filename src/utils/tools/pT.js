// @flow
import get from 'lodash.get';
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
  if (is(props.theme)) {
    return get(props.theme, path, defaultValue);
  }
  return get(theme, path, defaultValue);
};

export default pT;
