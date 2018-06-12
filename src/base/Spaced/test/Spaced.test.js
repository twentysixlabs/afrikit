// @flow
import React from 'react';
import expect from 'expect';
import { create as render } from 'react-test-renderer';
import Spaced from '../index';

const renderJSON = el => render(el).toJSON();

describe('Spaced Base Component', () => {
  test('renders', () => {
    const json = renderJSON(<Spaced />);
    expect(json).toMatchSnapshot();
  });

  test('renders children', () => {
    const json = renderJSON(
      <Spaced>
        <div>Hello</div>
        <h2>hi</h2>
      </Spaced>,
    );
    expect(json).toMatchSnapshot();
  });

  test('adds classNames to children', () => {
    const json = renderJSON(
      <Spaced mx={2}>
        <div>Hello</div>
        <h2>hi</h2>
      </Spaced>,
    );
    const { className } = json[0].props;

    expect(json[0].props.className.length > 0).toBeTruthy();
    expect(json[1].props.className).toEqual(className);
  });

  test('merges with existing child classNames', () => {
    const json = renderJSON(
      <Spaced mx={2}>
        <div className="beep">Hello</div>
        <h2>hi</h2>
      </Spaced>,
    );
    const { className } = json[0].props;
    expect(className).toMatch(/^beep\s/);
  });
});
