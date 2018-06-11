// @flow
import kindOf from '../kindOf';
import { isSelfClosing } from '../selfClosingTags';

export const htmlTag = (tag, inputAttribs, inputText) => {
  let text = inputText;
  let attribs = inputAttribs;
  const voided = text === false || attribs === false;

  if (kindOf(attribs) !== 'object') {
    text = attribs;
    attribs = {};
  }

  if (typeof text === 'undefined' || text === false) {
    text = '';
  }

  if (typeof text !== 'string') {
    throw new TypeError('expected text to be a string');
  }

  let html = `<${tag}`;
  // eslint-disable-next-line
  for (const key in attribs) {
    const val = attribs[key];
    if (val === true) {
      html += ` ${key}`;
    }
    if (typeof val === 'string') {
      html += ` ${key}="${val}"`;
    }
  }

  if (isSelfClosing(tag) || voided === true) {
    return `${html}>${text}`;
  }

  return `${html}>${text}</${tag}>`;
};
