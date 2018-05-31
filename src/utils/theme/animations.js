// @flow
import { keyframes } from "styled-components";

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
