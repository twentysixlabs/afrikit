// @flow
import get from 'lodash.get';
import { theme } from '../theme';
import { is } from './util-helpers';

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop("color", "red")};
 * `;
 */
const prop = (path: string, defaultValue?: any): any => (
  props: Object = {},
) => {
  if (is(props.theme)) {
    return get(props.theme, path, defaultValue);
  }
  return get(theme, path, defaultValue);
};

export default prop;
