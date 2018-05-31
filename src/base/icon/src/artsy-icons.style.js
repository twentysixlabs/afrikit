// @flow
import { injectGlobal } from 'styled-components';

// const artsyFontUrl = "https://webfonts.artsy.net/artsy-icons.woff2?uo9ko";
const artsyFontCSSUrl = 'https://webfonts.artsy.net/all-webfonts.css';

// $FlowIssue
const ArtsyFontBase = () => injectGlobal`
  @import url(${artsyFontCSSUrl});
`;

export default ArtsyFontBase;
