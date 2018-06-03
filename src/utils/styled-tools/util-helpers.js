// @flow
import { get as lodashGet } from 'lodash.get';
import { reduce as lodashReduce } from 'lodash.reduce';
import { values as lodashValues } from 'lodash.values';
import { difference as lodashDifference } from 'lodash.difference';
import { at as lodashAt } from 'lodash.at';

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
