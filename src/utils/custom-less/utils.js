// @flow

module.exports = {
  getLocation: (index, inputStream) => {
    let n = index + 1;
    let line = null;
    let column = -1;

    while (--n >= 0 && inputStream.charAt(n) !== '\n') {
      column++;
    }

    if (typeof index === 'number') {
      line = (inputStream.slice(0, index).match(/\n/g) || '').length;
    }

    return {
      line,
      column,
    };
  },
  copyArray: arr => {
    let i;
    const { length } = arr;
    const copy = new Array(length);

    for (i = 0; i < length; i++) {
      copy[i] = arr[i];
    }
    return copy;
  },
  clone: obj => {
    const cloned = {};
    for (const prop in obj) {
      // eslint-disable-next-line
      if (obj.hasOwnProperty(prop)) {
        cloned[prop] = obj[prop];
      }
    }
    return cloned;
  },
  defaults: (obj1, obj2) => {
    if (!obj2._defaults || obj2._defaults !== obj1) {
      for (const prop in obj1) {
        // eslint-disable-next-line
        if (obj1.hasOwnProperty(prop)) {
          // eslint-disable-next-line
          if (!obj2.hasOwnProperty(prop)) {
            // eslint-disable-next-line
            obj2[prop] = obj1[prop];
          } else if (Array.isArray(obj1[prop]) && Array.isArray(obj2[prop])) {
            obj1[prop].forEach(p => {
              if (obj2[prop].indexOf(p) === -1) {
                obj2[prop].push(p);
              }
            });
          }
        }
      }
    }
    // eslint-disable-next-line
    obj2._defaults = obj1;
    return obj2;
  },
  merge: (obj1, obj2) => {
    for (const prop in obj2) {
      // eslint-disable-next-line
      if (obj2.hasOwnProperty(prop)) {
        // eslint-disable-next-line
        obj1[prop] = obj2[prop];
      }
    }
    return obj1;
  },
};
