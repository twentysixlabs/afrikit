// @flow
import { theme, sys } from '../../theme';
import { Flex } from '../Flex';

export const Group = sys(
  {
    is: Flex,
  },
  props => {
    // eslint-disable-next-line
    const radius = theme('radii.2', 4)(props) + 'px';
    return {
      '& > *': {
        borderRadius: 0,
      },
      '& > *:first-child': {
        borderRadius: `${radius} 0 0 ${radius}`,
      },
      '& > *:last-child': {
        borderRadius: `0 ${radius} ${radius} 0`,
      },
    };
  },
);

Group.displayName = 'Group';

export default Group;
