// @flow

const parseUnit = (strInput, theout) => {
  let out = theout;
  if (!out) out = [0, ''];

  const str = String(strInput);
  const num = parseFloat(str, 10);
  out[0] = num;
  out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || '';
  return out;
};

export default parseUnit;
