// @flow

// import isString from 'lodash.isstring';
// import flatten from 'lodash.flatten';
import warning from './warning';
import { isString, flatten } from '../tools/util-helpers';

const replace = (string, regexpOrSubstr, newValueOrFn) => {
  warning(typeof string === 'string', 'First param must be a string');
  warning(
    typeof regexpOrSubstr === 'string' || regexpOrSubstr instanceof RegExp,
    'Second param must be a string pattern or a regular expression',
  );

  const fn =
    typeof regexpOrSubstr === 'string'
      ? replaceUsingString
      : replaceUsingRegexp;

  return fn(string, regexpOrSubstr, newValueOrFn);
};

const replaceUsingString = (string, patternString, newValueOrFn) => {
  const index = string.indexOf(patternString);

  if (index >= 0) {
    const arr = [];
    const endIndex = index + patternString.length;

    if (index > 0) {
      arr.push(string.substring(0, index));
    }

    arr.push(
      typeof newValueOrFn === 'function'
        ? newValueOrFn(string.substring(index, endIndex), index, string)
        : newValueOrFn,
    );

    if (endIndex < string.length) {
      arr.push(string.substring(endIndex));
    }

    return arr;
  }
  return [string];
};

const replaceUsingRegexp = (string, regexp, newValueOrFn) => {
  const output = [];

  const replacerIsFn = typeof newValueOrFn === 'function';

  const storedLastIndex = regexp.lastIndex;
  // eslint-disable-next-line
  regexp.lastIndex = 0;

  let result;
  let lastIndex = 0;
  // eslint-disable-next-line
  while ((result = regexp.exec(string))) {
    const { index } = result;

    if (result[0] === '') {
      // When the regexp is an empty string
      // we still want to advance our cursor to the next item.
      // This is the behavior of String.replace.
      // eslint-disable-next-line
      regexp.lastIndex++;
    }

    if (index !== lastIndex) {
      output.push(string.substring(lastIndex, index));
    }

    const match = result[0];
    lastIndex = index + match.length;

    const out = replacerIsFn
      ? newValueOrFn.apply(this, result.concat(index, result.input))
      : newValueOrFn;
    output.push(out);

    if (!regexp.global) {
      break;
    }
  }

  if (lastIndex < string.length) {
    output.push(string.substring(lastIndex));
  }

  // eslint-disable-next-line
  regexp.lastIndex = storedLastIndex;
  return output;
};

const stringReplaceToArray = (string, regexpOrSubstr, newSubStrOrFn) => {
  if (isString(string)) {
    return replace(string, regexpOrSubstr, newSubStrOrFn);
  } else if (!Array.isArray(string) || !string[0]) {
    throw new TypeError('First argument must be an array or non-empty string');
  } else {
    return flatten(
      string.map(thestring => {
        if (!isString(thestring)) return thestring;
        return replace(thestring, regexpOrSubstr, newSubStrOrFn);
      }),
    );
  }
};

export default stringReplaceToArray;
