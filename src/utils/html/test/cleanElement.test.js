// // @flow

// import expect from 'expect';
// import React from 'react';
// import styled from 'styled-components';
// import { renderToString } from 'react-dom/server';
// import { textAlign, styles } from '../../../theme/space';
// import cleanElement from '../cleanElement';

// const { propTypes } = styles;

// describe('cleanElement', () => {
//   it('removes props with prop types', () => {
//     const Clean = cleanElement('div');
//     Clean.propTypes = {
//       ...propTypes.textAlign,
//     };
//     const Box = styled(Clean)`
//       ${textAlign};
//     `;

//     const result = renderToString(
//       <Box id="beep" textAlign="center">
//         hello
//       </Box>,
//     );

//     // t.snapshot(result);
//     expect(result).toMatchSnapshot();
//   });

//   it('does not remove props without propTypes', () => {
//     const Clean = cleanElement('div');
//     const Box = styled(Clean)`
//       ${textAlign};
//     `;

//     const result = renderToString(
//       <Box id="beep" textAlign="center">
//         hello
//       </Box>,
//     );

//     // t.snapshot(result);
//     expect(result).toMatchSnapshot();
//   });
// });
