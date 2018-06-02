// @flow
import { get } from 'lodash.get';
import { reduce } from 'lodash.reduce';
import { values } from 'lodash.values';
import { difference } from 'lodash.difference';
import { at } from 'lodash.at';

export const is = n => n !== undefined && n !== null;
// eslint-disable-next-line
export const num = n => typeof n === 'number' && !isNaN(n);
export const px = n => (num(n) ? `${n}px` : n);
export const neg = n => n < 0;
export const arr = n => (Array.isArray(n) ? n : [n]);
export const get = get;
export const reduce = reduce;
export const values = values;
export const difference = difference;
export const at = at;
