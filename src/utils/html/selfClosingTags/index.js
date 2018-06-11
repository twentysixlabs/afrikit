// @flow
export const svgElements = [
  'circle',
  'ellipse',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'use',
];

export const voidElements = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

export const selfClosingTags = voidElements.concat(svgElements);

export const isSelfClosing = name => {
  if (typeof name !== 'string') {
    throw new TypeError('expected name to be a string');
  }
  return selfClosingTags.indexOf(name.toLowerCase()) !== -1;
};
