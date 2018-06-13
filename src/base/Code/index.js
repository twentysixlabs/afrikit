// @flow
import { sys } from '../../theme';

export const Code = sys(
  {
    is: 'code',
    fontSize: 1,
    fontFamily: 'mono',
  },
  'fontFamily',
  'space',
  'color',
);

Code.displayName = 'Code';

export default Code;
