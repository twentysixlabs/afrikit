// @flow
/**
 * @typedef {Object} RGB
 * @property {number} R
 * @property {number} G
 * @property {number} B
 */

/**
 * @typedef {Object} HSV
 * @property {number} H
 * @property {number} S
 * @property {number} V
 */

/**
 *
 * @param {HSV} hsv
 * @returns {RGB}
 */
export const hsv2rgb = hsv => {
  const h = (hsv.H / 360) * 6;
  const s = hsv.S / 100;
  const v = hsv.V / 100;

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return {
    R: Math.round(r * 255),
    G: Math.round(g * 255),
    B: Math.round(b * 255),
  };
};

/**
 *
 * @param {RGB} rgb
 * @returns {string}
 */
export const rgb2html = rgb =>
  `#${rgb.R.toString(16)}${rgb.G.toString(16)}${rgb.B.toString(16)}`;

/**
 *
 * @param {number} from
 * @param {number} to
 * @param {number} x
 * @returns {number}
 */
export const linear = (from, to, x) => from + (to - from) * x;

/**
 *
 * @param {HSV} color1
 * @param {HSV} color2
 * @param {number} x
 * @returns {HSV}
 */
export const interpolateHSV = (color1, color2, x) => ({
  H: Math.round(linear(color1.H, color2.H, x)),
  S: Math.round(linear(color1.S, color2.S, x)),
  V: Math.round(linear(color1.V, color2.V, x)),
});

/**
 *
 * @param {string} hex
 * @param {number} [lum=0]
 * @return {string}
 */
export const colorLuminance = (hex, lum = 0) => {
  // validate hex string
  let validHex = String(hex).replace(/[^0-9a-f]/gi, '');

  if (validHex.length < 6) {
    validHex =
      validHex[0] +
      validHex[0] +
      validHex[1] +
      validHex[1] +
      validHex[2] +
      validHex[2];
  }

  // convert to decimal and change luminosity
  let rgb = '#';
  let c;
  let i;

  for (i = 0; i < 3; i++) {
    c = parseInt(validHex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += `00${c}`.substr(c.length);
  }

  return rgb;
};
