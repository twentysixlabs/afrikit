// @flow
import { sys } from '../../theme';

export const Card = sys(
  {
    p: 2,
    bg: 'white',
    borderRadius: 2,
    boxShadow: 2,
  },
  {
    overflow: 'hidden',
  },
  'space',
  'color',
);

Card.displayName = 'Card';

export default Card;
