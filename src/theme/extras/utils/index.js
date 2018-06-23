// @flow
const removeQuotes = string => {
  let unquotedString;
  let matchRegExp = /^"(.*)"$/;
  if (typeof string === 'string' || string instanceof String) {
    if (
      string.indexOf("'") > -1 // safari workaround
    )
      matchRegExp = /^'(.*)'$/;
    unquotedString = string.match(matchRegExp)[1].replace(/`/g, '"');
  }

  return unquotedString;
};

export const getSassConstants = () => {
  if (
    window.getComputedStyle &&
    window.getComputedStyle(document.body, '::before')
  ) {
    const style = window.getComputedStyle(document.body, '::before');
    if (style && style.content) return JSON.parse(removeQuotes(style.content));
  }

  return {};
};

export * from './misc';
export * from './polyfills';
export * from './create-broadcast';
export * from './colors';
