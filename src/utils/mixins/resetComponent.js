// @flow

import { theme } from '../../theme';

const resetComponent = () => css`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizeBase};
  line-height: ${theme.lineHeightBase};
  color: ${theme.textColor};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default resetComponent;
