# Usage

```js
const { htmlTag } = require('afrikit');
// or
import { htmlTag } from 'afrikit';
```

## HtmlTags

```js
htmlTag(name[, attribs, text]);
```

**Params**

- `tag` **{String}**: Name of the tag to create.
- `attribs` **{Object}**: Optional attributes
- `text` **{String|Boolean}**: Optional text
- `returns` **{String}**: string of HTML

**Examples**

```js
console.log(htmlTag('a', { href: 'https://sellside.com' }, 'Sellside'));
//=> <a href="https://sellside.com">Sellside</a>

console.log(htmlTag('a', { id: 'anchor' }));
//=> <a id="anchor"></a>

console.log(htmlTag('strong', "Let's dance!"));
//=> <strong>Let's dance</strong>

console.log(htmlTag('div'));
//=> <div></div>
```

**Void elements (self-closing htmlTags)**

```js
console.log(htmlTag('img', { src: 'foo.jpg' }));
//=> <img src="foo.jpg">

console.log(htmlTag('br'));
//=> <br>

console.log(htmlTag('br', '\nfoo'));
//=> <br>\nfoo
```

Force a htmlTag to _not render_ the closing htmlTag by passing boolean `false` as the last argument (this is sometimes necessary with XML implementations).

```js
console.log(htmlTag('P', 'Some random text...', false));
//=> <P>Some random text...

console.log(htmlTag('P', false));
//=> <P>
```

**Boolean attributes**

Boolean attributes are defined by defining the attribute with a boolean value (strictly `true` or strictly `false`)

```js
console.log(htmlTag('details', { open: true }));
//=> <details open></details>

console.log(htmlTag('details', { open: false }));
//=> <details></details>

console.log(htmlTag('details', { open: 'false' }));
//=> <details open="false"></details>
```
