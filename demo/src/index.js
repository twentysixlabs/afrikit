// @flow
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import theme from '../../src/theme/theme';
// import Subheading from '../../src/chroma/Subheading';
// import Button from '../../src/chroma/CButton';

// import { Example } from '../../src';
// import SampleHOC from './HOC';
import PageLayout from './routes';
import NavigationJS from '../../src/complex/navigation-next/examples/40-spa';

// const test = () => (
//   <div>
//   <h1>react-loading-button Demo</h1>
//   <SampleHOC />
//   <Subheading>Hello Nnenna</Subheading>
//   <Button primary="true">Test Button </Button>
//   </div>
// )

const Body = styled('div')`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;
class Demo extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavigationJS />
      </ThemeProvider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
