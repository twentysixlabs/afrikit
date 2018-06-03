// @flow
import { css, keyframes } from 'styled-components';
import transitions from './transitions';

export const motionCommon = (duration = transitions.duration) => css`
  animation-duration: ${duration};
  animation-fill-mode: both;
`;

export const motionCommonLeave = (duration = transitions.duration) => css`
  animation-duration: ${duration};
  animation-fill-mode: both;
`;

export const makeMotion = (
  className,
  keyFrameName,
  duration = transitions.duration,
) => css`
  .${className}-enter, .${className}-appear {
    ${motionCommon(duration)};
    animation-play-state: paused;
  }
  .${className}-leave {
    ${motionCommonLeave(duration)};
    animation-play-state: paused;
  }
  .${className}-enter.${className}-enter-active,
    .${className}-appear.${className}-appear-active {
    animation-name: ${keyFrameName}In;
    animation-play-state: running;
  }
  .${className}-leave.${className}-leave-active {
    animation-name: ${keyFrameName}Out;
    animation-play-state: running;
    pointer-events: none;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const fadeAndScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const pulsate = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const growAndFadeIn = (height: string) => keyframes`
  from {
    opacity: 0;
    height: 0;
  }

  to {
    opacity: 1;
    height: ${height};
  }
`;

export const shrinkAndFadeOut = (height: string) => keyframes`
  from {
    opacity: 0;
    height: 0;
  }

  to {
    opacity: 1;
    height: ${height}
  }
`;
