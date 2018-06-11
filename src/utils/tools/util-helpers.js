// @flow
import lodashGet from 'lodash.get';
import lodashReduce from 'lodash.reduce';
import lodashValues from 'lodash.values';
import lodashDifference from 'lodash.difference';
import lodashAt from 'lodash.at';
import lodashIsString from 'lodash.isstring';
import lodashFlatten from 'lodash.flatten';

export const is = n => n !== undefined && n !== null;
// eslint-disable-next-line
export const num = n => typeof n === 'number' && !isNaN(n);
export const px = n => (num(n) ? `${n}px` : n);
export const neg = n => n < 0;
export const arr = n => (Array.isArray(n) ? n : [n]);
export const get = lodashGet;
export const reduce = lodashReduce;
export const values = lodashValues;
export const difference = lodashDifference;
export const at = lodashAt;
export const isString = lodashIsString;
export const flatten = lodashFlatten;
