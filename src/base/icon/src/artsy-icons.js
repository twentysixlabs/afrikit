// @flow
import * as React from "react";
import styled from "styled-components";
import icons from "./artsy-icons.names";
import type { ArtsyIconName } from "./artsy-icons.names";

export interface ArtsyIconProps {
  name: ArtsyIconName;
  color?: string;
  fontSize?: string;
  className?: string;
  style?: any;
  onClick?: () => void;
}

const Icon: React.StatelessFunctionalComponent<ArtsyIconProps> = (
  props: ArtsyIconProps
) => (
  <div className={props.className} style={props.style} onClick={props.onClick}>
    {icons[props.name]}
  </div>
);

export default styled(Icon)`
  font-family: "artsy-icons";
  color: ${props => props.color || "blue"};
  font-size: ${props => props.fontSize || "24px"};
  margin: 0 5px;
  display: inline-block;
  letter-spacing: 0px;
`;
