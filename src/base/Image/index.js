// @flow
import { sys } from '../../theme';

export const Image = sys(
  {
    is: 'img',
  },
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  'space',
  'width',
  'color',
);

Image.displayName = 'Image';

export default Image;
