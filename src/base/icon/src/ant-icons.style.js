// @flow
import { injectGlobal } from 'styled-components';
import { AntIconList, antIconPrefix } from './ant-icons.names';

const antFontUrl = 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i';
const TheAntIconList = AntIconList.join('\r\n');

// $FlowIssue
const AntFontBase = () => injectGlobal`

  // font-face
  @font-face {
    font-family: ${antIconPrefix};
    src: url('${antFontUrl}.eot'); /* IE9*/
    src:
    /* chrome、firefox */
    url('${antFontUrl}.woff') format('woff'),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('${antFontUrl}.ttf') format('truetype'),
    /* iOS 4.1- */
    url('${antFontUrl}.svg#iconfont') format('svg');
  }

  .${antIconPrefix} {
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .${antIconPrefix}:before {
    display: block;
    font-family: "anticon" !important;
  }

  ${TheAntIconList}

  .${antIconPrefix}-spin {
    vertical-align: middle;
    text-align: center;
    opacity: 0;
    position: absolute;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: none;
  }

  .${antIconPrefix}-spinning {
    opacity: 1;
    position: static;
    display: inline-block;
  }

  .${antIconPrefix}-spin-container {
    opacity: 1;
    position: static;
    display: inline-block;
  }

  .${antIconPrefix}-spin-blur {
    pointer-events: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);

    /* autoprefixer: off */
    filter: ~"progid\:DXImageTransform\.Microsoft\.Blur(PixelRadius\=1, MakeShadow\=false)";
    // workround for a strange style bug in safari:
    // https://github.com/ant-design/ant-design/issues/4622
    // have no clue why this works
    -webkit-transform: translateZ(0);
  }

  .${antIconPrefix}-spin-blur:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    opacity: 0.3;
    transition: all .3s;
    z-index: 10;
  }

`;

export default AntFontBase;
