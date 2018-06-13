// @flow
import expect from 'expect';
import React from 'react';
// import { isCompositeComponent, isElement } from 'react-dom/test-utils';
import { create as render } from 'react-test-renderer';
import { __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS } from 'styled-components';
// eslint-disable-next-line
import * as Afrikit from '../index';
// eslint-disable-next-line
import { Provider } from '../index';
import { theme } from '../../theme';

const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;

describe('Base Components', () => {
  afterEach(() => {
    StyleSheet.reset();
  });

  // test('exports an object', () => {
  //   expect(typeof Afrikit).isEqual('object');
  // });

  test('Provider renders', () => {
    const json = render(<Provider />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('Provider renders with custom theme', () => {
    const json = render(
      <Provider
        theme={{
          fonts: [],
          fontSizes: [12, 16, 18, 24, 36, 48, 72],
          space: [0, 6, 12, 18, 24, 30, 36],
        }}
      />,
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('theme is an object', () => {
    expect(typeof theme).toEqual('object');
    expect(Array.isArray(theme.breakpoints)).toBeTruthy();
    expect(Array.isArray(theme.space)).toBeTruthy();
    expect(Array.isArray(theme.fontSizes)).toBeTruthy();
    // expect(typeof theme.fontWeights).toEqual('object');
    // expect(typeof theme.colors).toEqual('object');
    // expect(typeof theme.radii).toEqual('object');
    // expect(typeof theme.fonts).toEqual('object');
  });

  test('renders NavLink active', () => {
    const json = render(<Afrikit.NavLink active />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Text bold', () => {
    const json = render(<Afrikit.Text fontWeight="bold" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Border top', () => {
    const json = render(<Afrikit.Border borderTop={1} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Border right', () => {
    const json = render(<Afrikit.Border borderRight={1} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Border bottom', () => {
    const json = render(<Afrikit.Border borderBottom={1} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Border left', () => {
    const json = render(<Afrikit.Border borderLeft={1} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Border border 2', () => {
    const json = render(<Afrikit.Border border={2} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Border none', () => {
    const json = render(<Afrikit.Border border="none" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Banner backgroundImage', () => {
    const json = render(<Afrikit.Banner src="hello.png" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer open', () => {
    const json = render(<Afrikit.Drawer open />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer position top', () => {
    const json = render(<Afrikit.Drawer position="top" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer position right', () => {
    const json = render(<Afrikit.Drawer position="right" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer position bottom', () => {
    const json = render(<Afrikit.Drawer position="bottom" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer position left', () => {
    const json = render(<Afrikit.Drawer position="left" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer open position top', () => {
    const json = render(<Afrikit.Drawer open position="top" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer open position right', () => {
    const json = render(<Afrikit.Drawer open position="right" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer open position bottom', () => {
    const json = render(<Afrikit.Drawer open position="bottom" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer open position left', () => {
    const json = render(<Afrikit.Drawer open position="left" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Drawer size', () => {
    const json = render(<Afrikit.Drawer size={128} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Carousel index', () => {
    const json = render(<Afrikit.Carousel index={2} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Arrow up', () => {
    const json = render(<Afrikit.Arrow direction="up" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders Embed ratio', () => {
    const json = render(<Afrikit.Embed ratio={1 / 2} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('renders BackgroundImage src', () => {
    const json = render(<Afrikit.BackgroundImage src="hello.png" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
