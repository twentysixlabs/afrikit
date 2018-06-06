// @flow
// Ref: https://github.com/JedWatson/classnames/blob/master/index.js

const hasOwn = {}.hasOwnProperty;

function classnames() {
  const classes = [];

  for (let i = 0; i < arguments.length; i++) {
    // eslint-disable-next-line
    const arg = arguments[i];
    // eslint-disable-next-line
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      // eslint-disable-next-line
      const inner = classnames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

export default classnames;
