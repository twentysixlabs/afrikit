# Usage

```js
const {
  selfClosingTags,
  voidElements,
  svgElements,
  isSelfClosing,
} = require('afrikit');
// or
import {
  selfClosingTags,
  voidElements,
  svgElements,
  isSelfClosing,
} from 'afrikit';
```

## isSelfClosing

```js
console.log(isSelfClosing('path')); // SVG
console.log(isSelfClosing('img'));
//=> true

console.log(isSelfClosing('foo'));
//=> false
```

## selfClosingTags

```js
console.log(selfClosingTags.indexOf('img') !== -1);
// true
```

## voidElements

**Void elements only**

```js
console.log(voidElements.indexOf('img') !== -1);
// true
```

## svgElements

**SVG self-closing elements only**

```js
console.log(svgElements.indexOf('svg') !== -1);
// true
```
