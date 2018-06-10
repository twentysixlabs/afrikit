// @flow

import PropTypes from 'prop-types';
import defaultTheme from './theme';
import { is, num, px, arr, get } from '../tools';

const propTypes = {
  responsive: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  numberOrString: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const getWidth = n => (!num(n) || n > 1 ? px(n) : `${n * 100}%`);
export const mq = n => `@media screen and (min-width: ${px(n)})`;

export const fallbackTheme = props => ({
  ...defaultTheme,
  ...get(props, 'theme'),
});

export const breaks = props => [
  null,
  ...get(props, 'theme.spaceBreakpoints', theme.spaceBreakpoints).map(mq),
];

export const dec = props => val =>
  // eslint-disable-next-line
  arr(props).reduce((acc, prop) => ((acc[prop] = val), acc), {});

export const media = bp => (d, i) => {
  if (is(d)) {
    if (bp[i]) {
      return { [bp[i]]: d };
    }
    return d;
  }
  return null;
};

export const merge = (a, b) =>
  Object.assign(
    {},
    a,
    b,
    Object.keys(b).reduce(
      (obj, key) =>
        Object.assign(obj, {
          [key]:
            a[key] !== null && typeof a[key] === 'object'
              ? merge(a[key], b[key])
              : b[key],
        }),
      {},
    ),
  );

export const getValue = (val, getter, toPx) => {
  if (typeof getter === 'function') {
    return getter(val);
  }
  if (toPx) {
    return px(val);
  }
  return val;
};

export const style = ({
  prop, // react prop
  cssProperty, // css property
  alias, // shorthand alias for react prop
  key, // key for theme object
  getter, // accessor function for converting values
  numberToPx,
}) => {
  const fn = props => {
    // eslint-disable-next-line
    cssProperty = cssProperty || prop;
    const n = is(props[prop]) ? props[prop] : props[alias];
    const th = fallbackTheme(props);
    if (!is(n)) return null;
    const value = getValue(get(th, [key, n].join('.'), n), getter, numberToPx);

    return { [cssProperty]: value };
  };
  fn.propTypes = {
    [prop]: propTypes.numberOrString,
  };
  if (alias) {
    fn.propTypes[alias] = propTypes.numberOrString;
  }
  return fn;
};

export const responsiveStyle = ({
  prop,
  cssProperty,
  alias,
  key,
  getter,
  numberToPx,
}) => {
  const fn = props => {
    // eslint-disable-next-line
    cssProperty = cssProperty || prop;
    const n = is(props[prop]) ? props[prop] : props[alias];
    if (!is(n)) return null;

    const bp = breaks(props);
    const th = fallbackTheme(props);
    const sx = nx =>
      getValue(get(th, [key || prop, nx].join('.'), nx), getter, numberToPx);

    if (!Array.isArray(n)) {
      return {
        [cssProperty]: sx(n),
      };
    }

    const val = arr(n);
    return val
      .map(sx)
      .map(dec(cssProperty))
      .map(media(bp))
      .reduce(merge, {});
  };

  // add propTypes object to returned function
  fn.propTypes = {
    [prop]: propTypes.responsive,
  };
  if (alias) {
    fn.propTypes[alias] = propTypes.responsive;
  }

  return fn;
};

export const pseudoStyle = ({
  prop,
  alias,
  pseudoclass,
  keys = {},
  getters = {},
  numberToPx = {},
}) => {
  const fn = props => {
    const styles = props[prop] || props[alias];
    // eslint-disable-next-line
    pseudoclass = pseudoclass || prop;
    const th = fallbackTheme(props);
    if (styles) {
      // eslint-disable-next-line
      for (const key in styles) {
        const toPx = numberToPx[key];
        // eslint-disable-next-line
        if (!keys[key] && !getters[key] && !toPx) continue;
        const themeKey = [keys[key], styles[key]].join('.');
        styles[key] = getValue(
          get(th, themeKey, styles[key]),
          getters[key],
          toPx,
        );
      }
    }

    return {
      [`&:${pseudoclass}`]: style,
    };
  };
  fn.propTypes = {
    // eslint-disable-next-line
    [prop]: PropTypes.object,
  };
  return fn;
};

// todo: consider alternative names
export const themeGet = (keys, fallback) => props =>
  get(props.theme, keys, fallback);

const getBooleans = props => {
  const bools = [];
  for (const key in props) {
    // eslint-disable-next-line
    if (props[key] !== true) continue;
    bools.push(key);
  }
  return bools;
};

export const complexStyle = ({ prop, key, alias }) => {
  const fn = props => {
    let styles = get(
      props,
      ['theme', key, get(props, prop, props[alias])].join('.'),
      {},
    );
    const bools = getBooleans(props);
    bools.forEach(name => {
      styles = {
        ...styles,
        ...get(props, ['theme', key, name].join('.'), {}),
      };
    });
    return styles;
  };

  fn.propTypes = {
    [prop]: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  if (alias) {
    fn.propTypes[alias] = PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]);
  }

  return fn;
};
