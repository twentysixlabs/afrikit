// @flow

import rgba from './rgba';

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */

function hsva(h, s, v, a) {
  // eslint-disable-next-line
  h = ((h % 360) / 360) * 360;

  const i = Math.floor((h / 60) % 6);
  const f = h / 60 - i;

  const vs = [v, v * (1 - s), v * (1 - f * s), v * (1 - (1 - f) * s)];
  const perm = [
    [0, 3, 1],
    [2, 0, 1],
    [1, 0, 3],
    [1, 2, 0],
    [3, 1, 0],
    [0, 1, 2],
  ];

  return rgba(
    vs[perm[i][0]] * 255,
    vs[perm[i][1]] * 255,
    vs[perm[i][2]] * 255,
    a,
  );
}

function hsv(h: number, s: number, v: number): string {
  if (typeof h === 'number' && typeof s === 'number' && typeof v === 'number') {
    return hsva(h, s, v, 1.0);
  }

  throw new Error(
    'Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).',
  );
}

export default hsv;
