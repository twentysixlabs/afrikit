// @flow

import * as React from "react";
import classNames from "classnames";
import omit from "../../../helpers/omit";

export interface AntIconProps {
  type: string;
  className?: string;
  title?: string;
  // onClick?: (e: SyntheticEvent<any>) => any;
  onClick?: Function;
  spin?: boolean;
  style?: Object;
}

const Icon = (props: AntIconProps) => {
  const { type, className = "", spin } = props;
  const classString = classNames(
    {
      anticon: true,
      "anticon-spin": !!spin || type === "loading",
      [`anticon-${type}`]: true
    },
    className
  );
  return <i {...omit(props, ["type", "spin"])} className={classString} />;
};

export default Icon;
