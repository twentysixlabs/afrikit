// @flow
import { sys } from '../../theme';

const css = props => props.css;

export const Base = sys('space', 'color', 'fontSize', css);

Base.displayName = 'Base';

export default Base;
