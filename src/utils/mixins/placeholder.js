// @flow

import { theme } from '../../theme';

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder('red', {'opacity': .8})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder('red', {'opacity': .8})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'red';
 *     'opacity': .8;
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'red';
 *     'opacity': .8;
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'red';
 *     'opacity': .8;
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'red';
 *     'opacity': .8;
 *   },
 * },
 */

function placeholder(
  color?: string = theme.inputPlaceholderColor,
  styles?: Object = {},
  parent?: string = '&',
): Object {
  return {
    // Webkit(Safari and Chrome)
    [`${parent}::-webkit-input-placeholder`]: {
      color,
      ...styles,
    },
    // Firefox
    [`${parent}:-moz-placeholder`]: {
      color,
      opacity: 1, // Override Firefox's unusual default opacity
      ...styles,
    },
    [`${parent}::-moz-placeholder`]: {
      color,
      opacity: 1, // Override Firefox's unusual default opacity
      ...styles,
    },
    // Internet Explorer 10+
    [`${parent}:-ms-input-placeholder`]: {
      color,
      ...styles,
    },
  };
}

export default placeholder;
