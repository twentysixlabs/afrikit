// @flow

const Node = require('./node');
const colors = require('../data/colors');

//
// RGB Colors - #ff0014, #eee
//
const Color = function(rgb, a, originalForm) {
  //
  // The end goal here, is to parse the arguments
  // into an integer triplet, such as `128, 255, 0`
  //
  // This facilitates operations and conversions.
  //
  if (Array.isArray(rgb)) {
    this.rgb = rgb;
  } else if (rgb.length == 6) {
    this.rgb = rgb.match(/.{2}/g).map(c => {
      return parseInt(c, 16);
    });
  } else {
    this.rgb = rgb.split('').map(c => {
      return parseInt(c + c, 16);
    });
  }
  this.alpha = typeof a === 'number' ? a : 1;
  if (typeof originalForm !== 'undefined') {
    this.value = originalForm;
  }
};

Color.prototype = new Node();
Color.prototype.type = 'Color';

function clamp(v, max) {
  return Math.min(Math.max(v, 0), max);
}

function toHex(v) {
  // eslint-disable-next-line
  return (
    `#${
    v
      .map((c) => {
        // eslint-disable-next-line
        c = clamp(Math.round(c), 255);
        return (c < 16 ? '0' : '') + c.toString(16);
      })
      .join('')}`
  );
}

Color.prototype.luma = function() {
  let r = this.rgb[0] / 255;
  let g = this.rgb[1] / 255;
  let b = this.rgb[2] / 255;

  // eslint-disable-next-line
  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  // eslint-disable-next-line
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  // eslint-disable-next-line
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
Color.prototype.genCSS = function(context, output) {
  output.add(this.toCSS(context));
};
Color.prototype.toCSS = function(context, doNotCompress) {
  // eslint-disable-next-line
  var compress = context && context.compress && !doNotCompress,
    color,
    alpha;

  // `value` is set if this color was originally
  // converted from a named color string so we need
  // to respect this and try to output named color too.
  if (this.value) {
    return this.value;
  }

  // If we have some transparency, the only way to represent it
  // is via `rgba`. Otherwise, we use the hex representation,
  // which has better compatibility with older browsers.
  // Values are capped between `0` and `255`, rounded and zero-padded.
  alpha = this.fround(context, this.alpha);
  if (alpha < 1) {
    // eslint-disable-next-line
    return (
      `rgba(${
      this.rgb
        .map((c) => {
          return clamp(Math.round(c), 255);
        })
        .concat(clamp(alpha, 1))
        // eslint-disable-next-line
        .join(',' + (compress ? '' : ' '))
      })`
    );
  }

  color = this.toRGB();

  if (compress) {
    const splitcolor = color.split('');

    // Convert color to short format
    if (
      splitcolor[1] === splitcolor[2] &&
      splitcolor[3] === splitcolor[4] &&
      splitcolor[5] === splitcolor[6]
    ) {
      color = `# ${splitcolor} ${splitcolor} ${splitcolor}`;
    }
  }

  return color;
};

//
// Operations have to be done per-channel, if not,
// channels will spill onto each other. Once we have
// our result, in the form of an integer triplet,
// we create a new Color node to hold the result.
//
Color.prototype.operate = function(context, op, other) {
  const rgb = new Array(3);
  const alpha = this.alpha * (1 - other.alpha) + other.alpha;
  for (let c = 0; c < 3; c++) {
    rgb[c] = this._operate(context, op, this.rgb[c], other.rgb[c]);
  }
  return new Color(rgb, alpha);
};
Color.prototype.toRGB = function() {
  return toHex(this.rgb);
};
Color.prototype.toHSL = function() {
  const r = this.rgb[0] / 255;
  const g = this.rgb[1] / 255;
  const b = this.rgb[2] / 255;
  const a = this.alpha;
  // eslint-disable-next-line
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;
  const d = max - min;

  if (max === min) {
    // eslint-disable-next-line
    h = s = 0;
  } else {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    // eslint-disable-next-line
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  // eslint-disable-next-line
  return { h: h * 360, s: s, l: l, a: a };
};
// Adapted from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
Color.prototype.toHSV = function() {
  const r = this.rgb[0] / 255;
  const g = this.rgb[1] / 255;
  const b = this.rgb[2] / 255;
  const a = this.alpha;

  // eslint-disable-next-line
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h;
  let s;
  v = max;

  // eslint-disable-next-line
  let d = max - min;
  if (max === 0) {
    s = 0;
  } else {
    s = d / max;
  }

  if (max === min) {
    h = 0;
  } else {
    // eslint-disable-next-line
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  // eslint-disable-next-line
  return { h: h * 360, s: s, v: v, a: a };
};
Color.prototype.toARGB = function() {
  return toHex([this.alpha * 255].concat(this.rgb));
};
Color.prototype.compare = function(x) {
  return x.rgb &&
    x.rgb[0] === this.rgb[0] &&
    x.rgb[1] === this.rgb[1] &&
    x.rgb[2] === this.rgb[2] &&
    x.alpha === this.alpha
    ? 0
    : undefined;
};

// eslint-disable-next-line
Color.fromKeyword = keyword => {
  let c;
  const key = keyword.toLowerCase();
  // eslint-disable-next-line
  if (colors.hasOwnProperty(key)) {
    c = new Color(colors[key].slice(1));
  } else if (key === 'transparent') {
    c = new Color([0, 0, 0], 0);
  }

  if (c) {
    c.value = keyword;
    return c;
  }
};
module.exports = Color;
