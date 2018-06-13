// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import RootComp from '../Root';
import { theme as defaultTheme } from '../../theme';

export class Provider extends React.Component {
  render() {
    const {
      // eslint-disable-next-line
      theme,
      ...props
    } = this.props;

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <RootComp {...props} />
      </ThemeProvider>
    );
  }
}

Provider.defaultProps = {
  theme: {},
};

Provider.displayName = 'Afrikit.Provider';

export default Provider;
