// // @flow
// import React from 'react';
// import expect from 'expect';
// import { create as render } from 'react-test-renderer';
// import tag from '../cleanTag';

// describe('cleanElement', () => {
//   it('renders', () => {
//     const json = render(React.createElement(tag)).toJSON();
//     expect(json.type).toEqual('div');
//     expect(json).toMatchSnapshot();
//   });

//   test('omits props', () => {
//     const json = render(
//       React.createElement(tag, {
//         id: 'hello',
//         m: 2,
//         px: 3,
//         color: 'blue',
//       }),
//     ).toJSON();
//     expect(json.props.m).toBeUndefined();
//     expect(json.props.px).toBeUndefined();
//     expect(json.props.blue).toBeUndefined();
//     expect(json.props.id).toEqual('hello');
//   });

//   test('exports html tags', () => {
//     const h1 = render(React.createElement(tag.h1)).toJSON();
//     const header = render(React.createElement(tag.header)).toJSON();
//     expect(h1.type).toEqual('h1');
//     expect(header.type).toEqual('header');
//   });

//   test('exported html tags only omit blacklisted props', () => {
//     const json = render(
//       React.createElement(tag.h1, {
//         id: 'hello',
//         m: 2,
//         px: 3,
//         color: 'blue',
//       }),
//     ).toJSON();
//     expect(json.props.m).toBeUndefined();
//     expect(json.props.px).toBeUndefined();
//     expect(json.props.blue).toBeUndefined();
//     expect(json.props.id).toEqual('hello');
//   });
// });
