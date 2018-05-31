// @flow
import { injectGlobal } from "styled-components";

const artsyFontUrl = "https://webfonts.artsy.net/artsy-icons.woff2?uo9ko";

// $FlowIssue
const ArtsyFontBase = () => injectGlobal`
  @import url(${artsyFontUrl});

  @font-face {
    font-family: 'artsy-icons';
    src: url("artsy-icons.eot?uo9ko");
    src: url("artsy-icons.eot?#iefixuo9ko") format('embedded-opentype'),
         url("artsy-icons.woff2?uo9ko") format('woff2'),
         url("artsy-icons.ttf?uo9ko") format('truetype'),
         url("artsy-icons.woff?uo9ko") format('woff'),
         url("artsy-icons.svg?uo9ko#artsy-icons") format('svg');
    font-weight: normal;
    font-style: normal;
`;

export default ArtsyFontBase;
