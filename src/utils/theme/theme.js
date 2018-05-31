// @flow
// Export theme to theme provider
// Every property here is globally available in styled-components when interpolating a function like so:
// ${(props) => props.theme}
// Or using import { withTheme } from 'styled-components';

// https://jsfiddle.net/nnennajohn/qg0o3zb9/7/

import {
  fadeIn,
  fadeOut,
  fadeAndScaleIn,
  pulsate,
  growAndFadeIn,
  shrinkAndFadeOut
} from "./animations";
import { colorPalette } from "./color-pallete";

export const theme = {
  bg: {
    default: "#FFFFFF",
    reverse: "#162d3d",
    wash: "#F9FbFd",
    border: "#E8EbE9",
    inactive: "#f1f1f1"
  },
  brand: {
    default: "#3899ec",
    alt: "#4eb7f5",
    wash: "#eaf7ff",
    border: "#daeffe",
    dark: "#308ddd"
  },
  generic: {
    default: "#c1e4fe",
    alt: "#f4fafe"
  },
  social: {
    facebook: {
      default: "#3B5998",
      alt: "#5A85DF"
    },
    twitter: {
      default: "#00ACED",
      alt: "#53D0FF"
    },
    google: {
      default: "#ea4335",
      alt: "#ea4335"
    },
    github: {
      default: "#16171A",
      alt: "#16171A"
    },
    ph: {
      default: "#D85537",
      alt: "#D85537"
    }
  },
  space: {
    darker: "#ff5d00",
    default: "#aadbfc",
    alt: "#A1D7FB",
    wash: "#c1e4fe",
    border: "#b3e0fb",
    dark: "#2b81cb"
  },
  special: {
    default: "#fdb10c",
    alt: "#fac249",
    dark: "#eda200",
    wash: "#fff9e1",
    border: "#fef0ba",
    active: "#c68801"
  },
  success: {
    default: "#60bc57",
    alt: "#80c979",
    dark: "#61ad5a",
    wash: "#edf9e5",
    border: "#c9eebc",
    active: "#44823f"
  },
  text: {
    default: "#162d3d",
    alt: "#7a92a5",
    reverse: "#FFFFFF",
    placeholder: "#b6c1cd",
    secondary: "#32536A",
    light: "#577083"
  },
  warn: {
    default: "#d8504c",
    alt: "#ee5951",
    dark: "#d6453d",
    wash: "#ffebeb",
    border: "#ffd7d7",
    notif: "#ff6666",
    notiflight: "#ffe1e1",
    active: "#e05050",
    medium: "#f7625a"
  },
  extras: {
    bglight: "#dfe5eb",
    bglighter: "#f0f4f7",
    bgwhite: "#ffffff",
    bgdisabled: "#eff1f2",
    btndisabled: "#cbd3dc",
    focusoutline: "#aadbfc",
    inputhelper: "#a3abb0"
  },
  purp: {
    default: "#cd68ed",
    alt: "#e5c9ee",
    dark: "#aa4dc8",
    wash: "#faeeff",
    border: "#eedbf4",
    active: "#8e21b1"
  },
  org: {
    default: "#fb7d33",
    alt: "#ff9a48",
    dark: "#ea5f0e"
  },
  grays: {
    normal: "#f8f8f8",
    medium: "#cccccc",
    regular: "#e5e5e5",
    dark: "#999999",
    semibold: "#666666",
    bold: "#333333",
    white: "#ffffff",
    black: "#000000",
    black30: "#c2c2c2"
  },
  breakpoints: {
    xs: 0, // rem
    sm: 48, // rem
    md: 64, // rem
    lg: 75, // rem
    xl: 85
  },
  flexboxgrid: {
    // Defaults
    gutterWidth: 3, // rem
    outerMargin: 2, // rem
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    }
  },
  transitions: {
    duration: "300ms",
    "ease-out": {
      timing: "cubic-bezier(0.215, 0.61, 0.355, 1)"
    },
    "ease-in": {
      timing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    "ease-in-out": {
      timing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
    },
    "ease-out-back": {
      timing: "cubic-bezier(0.12, 0.4, 0.29, 1.46)"
    },
    "ease-in-back": {
      timing: "cubic-bezier(0.71, -0.46, 0.88, 0.6)"
    },
    "ease-in-out-back": {
      timing: "cubic-bezier(0.71, -0.46, 0.29, 1.46)"
    },
    "ease-out-circ": {
      timing: "cubic-bezier(0.08, 0.82, 0.17, 1)"
    },
    "ease-in-circ": {
      timing: "cubic-bezier(0.6, 0.04, 0.98, 0.34)"
    },
    "ease-in-out-circ": {
      timing: "cubic-bezier(0.78, 0.14, 0.15, 0.86)"
    },
    "ease-out-quint": {
      timing: "cubic-bezier(0.23, 1, 0.32, 1)"
    },
    "ease-in-quint": {
      timing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)"
    },
    "ease-in-out-quint": {
      timing: "cubic-bezier(0.86, 0, 0.07, 1)"
    }
  },
  animations: {
    fadeIn,
    fadeOut,
    fadeAndScaleIn,
    pulsate,
    growAndFadeIn,
    shrinkAndFadeOut
  },
  zindex: {
    // z-index list
    affix: 10,
    backTop: 10,
    modalMask: 1000,
    modal: 1000,
    notification: 1010,
    message: 1010,
    popover: 1030,
    picker: 1050,
    dropdown: 1050,
    tooltip: 1060
  },
  shadows: {
    base: "0 2px 8px rgba(0, 0, 0, .15)",
    oneup: "0 2px 8px rgba(0, 0, 0, .15)",
    onedown: "0 2px 8px rgba(0, 0, 0, .15)",
    oneleft: "-2px 0 8px rgba(0, 0, 0, .15)",
    oneright: "2px 0 8px rgba(0, 0, 0, .15)",
    two: "0 4px 12px rgba(0, 0, 0, .15)"
  },
  borders: {
    radiusBase: "4px",
    radiusSm: "2px",
    colorBase: "hsv(0, 0, 85%)", // base border outline a component
    colorSplit: "hsv(0, 0, 91%)", // split border inside a component
    widthBase: "1px", // width of the border for a component
    styleBase: "solid" // style of a components border
  },

  colors: {
    blue1: colorPalette("#1890ff", 1),
    blue2: colorPalette("#1890ff", 2),
    blue3: colorPalette("#1890ff", 3),
    blue4: colorPalette("#1890ff", 4),
    blue5: colorPalette("#1890ff", 5),
    blue6: "#1890ff",
    blue7: colorPalette("#1890ff", 7),
    blue8: colorPalette("#1890ff", 8),
    blue9: colorPalette("#1890ff", 9),
    blue10: colorPalette("#1890ff", 10),

    purple1: colorPalette("#722ed1", 1),
    purple2: colorPalette("#722ed1", 2),
    purple3: colorPalette("#722ed1", 3),
    purple4: colorPalette("#722ed1", 4),
    purple5: colorPalette("#722ed1", 5),
    purple6: "#722ed1",
    purple7: colorPalette("#722ed1", 7),
    purple8: colorPalette("#722ed1", 8),
    purple9: colorPalette("#722ed1", 9),
    purple10: colorPalette("#722ed1", 10),

    cyan1: colorPalette("#13c2c2", 1),
    cyan2: colorPalette("#13c2c2", 2),
    cyan3: colorPalette("#13c2c2", 3),
    cyan4: colorPalette("#13c2c2", 4),
    cyan5: colorPalette("#13c2c2", 5),
    cyan6: "#13c2c2",
    cyan7: colorPalette("#13c2c2", 7),
    cyan8: colorPalette("#13c2c2", 8),
    cyan9: colorPalette("#13c2c2", 9),
    cyan10: colorPalette("#13c2c2", 10),

    green1: colorPalette("#52c41a", 1),
    green2: colorPalette("#52c41a", 2),
    green3: colorPalette("#52c41a", 3),
    green4: colorPalette("#52c41a", 4),
    green5: colorPalette("#52c41a", 5),
    green6: "#52c41a",
    green7: colorPalette("#52c41a", 7),
    green8: colorPalette("#52c41a", 8),
    green9: colorPalette("#52c41a", 9),
    green10: colorPalette("#52c41a", 10),

    magenta1: colorPalette("#eb2f96", 1),
    magenta2: colorPalette("#eb2f96", 2),
    magenta3: colorPalette("#eb2f96", 3),
    magenta4: colorPalette("#eb2f96", 4),
    magenta5: colorPalette("#eb2f96", 5),
    magenta6: "#eb2f96",
    magenta7: colorPalette("#eb2f96", 7),
    magenta8: colorPalette("#eb2f96", 8),
    magenta9: colorPalette("#eb2f96", 9),
    magenta10: colorPalette("#eb2f96", 10),

    // alias of magenta
    pink1: colorPalette("#eb2f96", 1),
    pink2: colorPalette("#eb2f96", 2),
    pink3: colorPalette("#eb2f96", 3),
    pink4: colorPalette("#eb2f96", 4),
    pink5: colorPalette("#eb2f96", 5),
    pink6: "#eb2f96",
    pink7: colorPalette("#eb2f96", 7),
    pink8: colorPalette("#eb2f96", 8),
    pink9: colorPalette("#eb2f96", 9),
    pink10: colorPalette("#eb2f96", 10),

    red1: colorPalette("#f5222d", 1),
    red2: colorPalette("#f5222d", 2),
    red3: colorPalette("#f5222d", 3),
    red4: colorPalette("#f5222d", 4),
    red5: colorPalette("#f5222d", 5),
    red6: "#f5222d",
    red7: colorPalette("#f5222d", 7),
    red8: colorPalette("#f5222d", 8),
    red9: colorPalette("#f5222d", 9),
    red10: colorPalette("#f5222d", 10),

    orange1: colorPalette("#fa8c16", 1),
    orange2: colorPalette("#fa8c16", 2),
    orange3: colorPalette("#fa8c16", 3),
    orange4: colorPalette("#fa8c16", 4),
    orange5: colorPalette("#fa8c16", 5),
    orange6: "#fa8c16",
    orange7: colorPalette("#fa8c16", 7),
    orange8: colorPalette("#fa8c16", 8),
    orange9: colorPalette("#fa8c16", 9),
    orange10: colorPalette("#fa8c16", 10),

    yellow1: colorPalette("#fadb14", 1),
    yellow2: colorPalette("#fadb14", 2),
    yellow3: colorPalette("#fadb14", 3),
    yellow4: colorPalette("#fadb14", 4),
    yellow5: colorPalette("#fadb14", 5),
    yellow6: "#fadb14",
    yellow7: colorPalette("#fadb14", 7),
    yellow8: colorPalette("#fadb14", 8),
    yellow9: colorPalette("#fadb14", 9),
    yellow10: colorPalette("#fadb14", 10),

    volcano1: colorPalette("#fa541c", 1),
    volcano2: colorPalette("#fa541c", 2),
    volcano3: colorPalette("#fa541c", 3),
    volcano4: colorPalette("#fa541c", 4),
    volcano5: colorPalette("#fa541c", 5),
    volcano6: "#fa541c",
    volcano7: colorPalette("#fa541c", 7),
    volcano8: colorPalette("#fa541c", 8),
    volcano9: colorPalette("#fa541c", 9),
    volcano10: colorPalette("#fa541c", 10),

    geekblue1: colorPalette("#2f54eb", 1),
    geekblue2: colorPalette("#2f54eb", 2),
    geekblue3: colorPalette("#2f54eb", 3),
    geekblue4: colorPalette("#2f54eb", 4),
    geekblue5: colorPalette("#2f54eb", 5),
    geekblue6: "#2f54eb",
    geekblue7: colorPalette("#2f54eb", 7),
    geekblue8: colorPalette("#2f54eb", 8),
    geekblue9: colorPalette("#2f54eb", 9),
    geekblue10: colorPalette("#2f54eb", 10),

    lime1: colorPalette("#a0d911", 1),
    lime2: colorPalette("#a0d911", 2),
    lime3: colorPalette("#a0d911", 3),
    lime4: colorPalette("#a0d911", 4),
    lime5: colorPalette("#a0d911", 5),
    lime6: "#a0d911",
    lime7: colorPalette("#a0d911", 7),
    lime8: colorPalette("#a0d911", 8),
    lime9: colorPalette("#a0d911", 9),
    lime10: colorPalette("#a0d911", 10),

    gold1: colorPalette("#faad14", 1),
    gold2: colorPalette("#faad14", 2),
    gold3: colorPalette("#faad14", 3),
    gold4: colorPalette("#faad14", 4),
    gold5: colorPalette("#faad14", 5),
    gold6: "#faad14",
    gold7: colorPalette("#faad14", 7),
    gold8: colorPalette("#faad14", 8),
    gold9: colorPalette("#faad14", 9),
    gold10: colorPalette("#faad14", 10)
  }
};
