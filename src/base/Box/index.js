// @flow
import styled from 'styled-components';
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  alignSelf,
  theme,
} from '../../theme';
import { cleanTag } from '../../utils';

const Box = styled(cleanTag)(
  [],
  { boxSizing: 'border-box' },
  width,
  space,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
);

Box.displayName = 'Box';

Box.defaultProps = {
  theme,
};

Box.propTypes = {
  ...width.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
};

export default Box;
