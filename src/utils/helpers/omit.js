// @flow
// Ref: https://github.com/benjycui/omit.js/blob/master/src/index.js
// Note: Might consider replacing with this - https://github.com/DamonOehlman/omit/blob/master/index.js
function omit(obj: Object, fields: string[]) {
  const shallowCopy = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

export default omit;
