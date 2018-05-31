// @flow
import { injectGlobal } from "styled-components";

const antFontUrl = '"https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i";';

// $FlowIssue
const AntFontBase = () => injectGlobal`
  @import url(${antFontUrl});
`;

export default AntFontBase;
