// @flow

// Ant
import AntFontIconBase from './src/ant-icons.style';
import AntIcon from './src/ant-icons';
import AntIconNames from './src/ant-icons.names';

// Artsy
import ArtsyFontBase from './src/artsy-icons.style';
import ArtsyIcon from './src/artsy-icons';
import ArtsyIconNames from './src/artsy-icons.names';
import ArtsyCircleIcon from './src/artsy-circle-icon';

// Spectrum
import SpectrumIcon, {
  SvgWrapper as SpectrumSvgWrapper,
  InlineSvg as SpectrumInlineSvg,
} from './src/spectrum-icons';

export type { AntIconProps } from './src/ant-icons';
export type { SpectrumIconProps } from './src/spectrum-icons';
export type { ArtsyIconProps } from './src/artsy-icons';
export type { ArtsyIconName } from './src/artsy-icons.names';

export {
  AntFontIconBase,
  AntIcon,
  AntIconNames,
  ArtsyFontBase,
  ArtsyIcon,
  ArtsyIconNames,
  ArtsyCircleIcon,
  SpectrumIcon,
  SpectrumSvgWrapper,
  SpectrumInlineSvg,
};
