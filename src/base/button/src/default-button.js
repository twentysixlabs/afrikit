// @flow
import * as React from 'react';
import styled from 'styled-components';
import { findDOMNode } from 'react-dom';
import { classNames, omit } from '../../../helpers';
import { AntIcon as Icon } from '../../icon';
import Group from './button-group';

function isString(str: any) {
  return typeof str === 'string';
}

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonState = 'default' | 'loading' | 'success' | 'failure';

export interface BaseButtonProps {
  type?: ButtonType;
  htmlType?: string;
  icon?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: boolean | { delay?: number };
  className?: string;
}

export type AnchorButtonProps =
  | BaseButtonProps
  | React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps =
  | BaseButtonProps
  | React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps: ButtonProps;

  timeout: number;
  delayTimeout: number;

  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      loading: props.loading,
      clicked: false,
    };
  }

  componentWillReceiveProps(nextProps: ButtonProps) {
    const currentLoading = this.props.loading;
    const { loading } = nextProps;

    if (currentLoading) {
      clearTimeout(this.delayTimeout);
    }

    if (typeof loading !== 'boolean' && loading && loading.delay) {
      this.delayTimeout = window.setTimeout(
        () => this.setState({ loading }),
        loading.delay,
      );
    } else {
      this.setState({ loading });
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    // Add click effect
    this.setState({ clicked: true });
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(
      () => this.setState({ clicked: false }),
      500,
    );

    const { onClick } = this.props;
    if (onClick) {
      (onClick: (
        e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
      ) => void)(e);
    }
  };

  isNeedInserted() {
    const { icon, children } = this.props;
    return React.Children.count(children) === 1 && !icon;
  }

  render() {
    const {
      type,
      shape,
      size,
      className,
      htmlType,
      children,
      icon,
      prefixCls,
      ghost,
      ...others
    } = this.props;

    const { loading, clicked } = this.state;

    // large => lg
    // small => sm
    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
      default:
        break;
    }

    const ComponentProp = (others: AnchorButtonProps).href ? 'a' : 'button';

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && icon,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-clicked`]: clicked,
      [`${prefixCls}-background-ghost`]: ghost,
    });

    const iconType = loading ? 'loading' : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;
    const kids =
      children || children === 0
        ? React.Children.map(children, child => child)
        : null;

    return (
      <ComponentProp
        {...omit(others, ['loading'])}
        type={
          (others: AnchorButtonProps).href ? undefined : htmlType || 'button'
        }
        className={classes}
        onClick={this.handleClick}
      >
        {iconNode}
        {kids}
      </ComponentProp>
    );
  }
}
