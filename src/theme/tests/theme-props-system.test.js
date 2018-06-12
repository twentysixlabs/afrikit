// @flow
import expect from 'expect';
// eslint-disable-next-line
import styled, { css as scCSS, isStyledComponent } from 'styled-components';

import {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS,
  // eslint-disable-next-line
} from 'styled-components';
import React from 'react';
import { create as render } from 'react-test-renderer';
// eslint-disable-next-line
import { isDOMComponent, isCompositeComponent } from 'react-dom/test-utils';

import { propTypes } from '../space';
import system from '../theme-props-system';

// 😎
const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;

const getCSS = () =>
  StyleSheet.instance
    .toReactElements()
    .map(el => el.props.dangerouslySetInnerHTML.__html)
    .join('');

describe('cleanElement', () => {
  afterEach(() => {
    StyleSheet.reset();
  });

  test('returns a React component', () => {
    const Box = system();
    const box = render(<Box />).getInstance();
    expect(isCompositeComponent(box)).toBeTruthy();
  });

  test('returns a styled-component', () => {
    const Box = system();
    expect(typeof Box).toEqual('function');
    expect(typeof Box.styledComponentId).toEqual('string');
  });

  test('Adds defaultProps', () => {
    const Box = system({
      p: 2,
      bg: 'tomato',
    });
    expect(Box.defaultProps).toEqual({
      p: 2,
      bg: 'tomato',
    });
  });

  test('adds propTypes', () => {
    const Box = system({
      p: 2,
      bg: 'tomato',
    });
    expect(Box.propTypes).toEqual({
      ...propTypes.space,
      ...propTypes.color,
    });
  });

  test('adds styled-system functions based on default props', () => {
    const Box = system({
      p: 3,
      bg: 'tomato',
    });
    const json = render(<Box />).toJSON();
    const css = getCSS();
    expect(css).toMatch(/padding:16px/);
    expect(css).toMatch(/background-color:tomato/);
  });

  test('accepts system key arguments', () => {
    const Box = system('space', 'color');
    expect(typeof Box.propTypes.m).toEqual('function');
    expect(typeof Box.propTypes.color).toEqual('function');
    expect(typeof Box.propTypes.bg).toEqual('function');
  });

  test('ignores nonexistant function keys', () => {
    const Box = system('foo', 'bar');
    expect(Box.propsTypes).toBeUndefined();
  });

  test('accepts custom function arguments', () => {
    const big = props => (props.big ? { padding: '64px' } : null);
    const Box = system(big);
    const json = render(<Box big />).toJSON();
    const css = getCSS();
    expect(css).toMatch(/padding:64px/);
  });

  test('removes styled-system props from underlying DOM element', () => {
    const Box = system({
      color: 'blue',
    });
    const json = render(<Box />).toJSON();
    expect(json.props.color).toBeUndefined();
    expect(typeof json.props.className).toEqual('string');
  });

  test('removes blacklist props from underlying DOM element', () => {
    const Box = system({
      blacklist: ['customProp'],
    });
    const json = render(<Box />).toJSON();
    expect(json.props.customProp).toBeUndefined();
  });

  test('accepts an `is` prop to change the underlying DOM element', () => {
    const Box = system({
      p: 2,
    });
    const json = render(<Box is="h1" />).toJSON();
    expect(json.type).toEqual('h1');
  });

  test('accepts a style function argument', () => {
    const Box = system(props => `color:${props.color};`);
    const json = render(<Box color="magenta" />).toJSON();
    const css = getCSS();
    expect(css).toMatch(/color:magenta/);
  });

  test('accepts theme as a default prop', () => {
    const theme = {
      colors: {
        blue: '#0af',
      },
    };
    const Box = system({ color: 'blue', theme });
    const json = render(<Box />).toJSON();
    const css = getCSS();
    expect(css).toMatch(/color:#0af/);
  });

  test('passes css string arguments', () => {
    const Box = system('color:cyan;');
    const json = render(<Box />).toJSON();
    const css = getCSS();
    expect(css).toMatch(/color:cyan;/);
  });

  test('works with the styled-component `css` helper', () => {
    const Box = system(scCSS`
      color: ${props => props.color};
    `);
    const json = render(<Box color="yellow" />).toJSON();
    const css = getCSS();
    expect(css).toMatch(/color:yellow/);
  });

  test('defaultProps are passed to extended components', () => {
    const Box = system(
      {
        p: 2,
        bg: 'tomato',
      },
      'space',
      'color',
    );
    const ExtendedBox = system({ is: Box });
    const json = render(<ExtendedBox />).toJSON();
    const css = getCSS();
    expect(css).toMatch(/background-color:tomato/);
  });
});
