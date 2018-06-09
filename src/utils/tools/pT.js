// @flow
import { theme } from '../../theme';

// Returns the value of `props.theme[path]` or `defaultValue`
// @example
// const Button = styled.button`
//  color: ${pT("color", "red")};
// `;

const pT = (path, defaultValue = '') => (props = {}) => {
  const thetheme = props.theme || theme;
  if (thetheme[path]) {
    return thetheme[path];
  }
  return defaultValue;
};

export default pT;

// Alternate implementation
// import get from 'lodash.get';
//
// const thetheme = props.theme || theme;
// return get(thetheme, path, defaultValue);
