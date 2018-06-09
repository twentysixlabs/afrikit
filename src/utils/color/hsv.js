// @flow

/**
 * Returns a rgba string value for the hvc color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsv(0, 0, 0.85),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsv(0, 0, 0.85)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(216.75,216.75,216.75)";
 * }
 */

function hsv(h: number, s: number, v: number): string {
  if (typeof h === 'number' && typeof s === 'number' && typeof v === 'number') {
    let r;
    let g;
    let b;

    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
      default:
        r = v;
        g = t;
        b = p;
        break;
    }

    const colorRed = r * 255;
    const colorGreen = g * 255;
    const colorBlue = b * 255;

    return `rgba(${colorRed}, ${colorGreen}, ${colorBlue})`;
  }

  throw new Error(
    'Passed invalid arguments to hsv, please pass multiple numbers e.g. hsv(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).',
  );
}

export default hsv;
