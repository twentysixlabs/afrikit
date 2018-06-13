// @flow
import React from 'react';

// eslint-disable-next-line
export const CSS = ({ css }) => (
  <style
    // eslint-disable-next-line
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);

CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}',
};

CSS.displayName = 'CSS';

export default CSS;
