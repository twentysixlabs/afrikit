// @flow
import { sys } from '../../theme/space';

export const Border = sys(
  {
    border: 1,
    borderColor: 'gray',
  },
  'space',
  'width',
  'color',
);

Border.displayName = 'Border';

export default Border;
