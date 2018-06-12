// @flow
import React from 'react';
import expect from 'expect';
import { create as render } from 'react-test-renderer';
import Box from '../index';

describe('Box Component', () => {
  test('Box renders', () => {
    const json = render(<Box m={2} px={3} />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('Box renders with props', () => {
    const json = render(
      <Box
        m={[1, 2]}
        px={[1, 2]}
        w={1}
        flex="1 1 auto"
        alignSelf="flex-start"
      />,
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  // clean
  test('Box removes grid-styled props', () => {
    const json = render(
      React.createElement(Box, {
        id: 'hi',
        width: 0.5,
        color: 'blue',
        fontSize: 4,
        wrap: true,
        flexWrap: 'wrap',
      }),
    ).toJSON();
    expect(json.props.id).toEqual('hi');
    expect(json.props.width).toEqual(undefined);
    expect(json.props.color).toEqual(undefined);
    expect(json.props.fontSize).toEqual(undefined);
    expect(json.props.wrap).toEqual(undefined);
  });

  test('Box accepts an is prop to change elements', () => {
    const json = render(
      React.createElement(Box, {
        is: 'h2',
      }),
    ).toJSON();
    expect(json.type).toEqual('h2');
  });
});
