// @flow
import * as React from 'react';
import styled from 'styled-components';
import { classNames } from '../../../utils';
import { AntIcon as Icon } from '../../icon';
import getButtonStyles from './styled';

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonState = 'default' | 'loading' | 'success' | 'failure';

export type BaseButtonProps = {
  type?: ButtonType,
  htmlType?: string,
  icon?: string,
  shape?: ButtonShape,
  size?: ButtonSize,
  loading?: boolean | { delay?: number },
  className?: string,
};

export type AnchorButtonProps =
  | BaseButtonProps
  | React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps =
  | BaseButtonProps
  | React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const StyledButton = styled.button`
  ${getButtonStyles};
`;
StyledButton.displayName = 'StyledButton';

// Target the <a> here to override a:hover specificity.
const StyledLink = styled.a`
  a& {
    ${getButtonStyles};
  }
`;
StyledLink.displayName = 'StyledLink';

class Button extends React.Component<ButtonProps, any> {
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

  getStyledComponent() {
    return this.props.href ? StyledLink : StyledButton;
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

    const StyledComponent = this.getStyledComponent();

    const classes = classNames(prefixCls, className, {
      [`btn-${type}`]: type,
      [`btn-${shape}`]: shape,
      [`btn-${sizeCls}`]: sizeCls,
      [`btn-icon-only`]: !children && icon,
      [`btn-loading`]: loading,
      [`btn-clicked`]: clicked,
      [`btn-background-ghost`]: ghost,
    });

    const iconType = loading ? 'loading' : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;
    const kids =
      children || children === 0
        ? React.Children.map(children, child => child)
        : null;

    return (
      <StyledComponent
        {...this.props}
        type={
          (others: AnchorButtonProps).href ? undefined : htmlType || 'button'
        }
        className={classes}
        onClick={this.handleClick}
      >
        {iconNode}
        {kids}
      </StyledComponent>
    );
  }
}

export default Button;

// <StyledComponent
// {...omit(others, ['loading'])}
// type={
//   (others: AnchorButtonProps).href ? undefined : htmlType || 'button'
// }
// className={classes}
// onClick={this.handleClick}
// >
// {iconNode}
// {kids}
// </StyledComponent>
