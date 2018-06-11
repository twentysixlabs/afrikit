// @flow
import expect from 'expect';
import { htmlTag as tag } from '../htmlTag';

describe('html tag', () => {
  it('should create an element with a closing tag', () => {
    expect(tag('strong', 'Hello world!')).toEqual(
      '<strong>Hello world!</strong>',
    );
  });

  it('should create an element with a closing tag and no text', () => {
    expect(tag('a', { id: 'anchor' })).toEqual('<a id="anchor"></a>');
  });

  it('should create an element with a closing tag and no text or attributes', () => {
    expect(tag('a')).toEqual('<a></a>');
  });

  it('should create an element with a closing tag and attributes', () => {
    const actual = tag('a', { href: 'https://sellside.com' }, 'Sellside');
    expect(actual).toEqual('<a href="https://sellside.com">Sellside</a>');
  });

  it('should create an element with a closing tag and multiple attributes', () => {
    const actual = tag(
      'a',
      { href: 'https://sellside.com', title: 'Sellside' },
      'Sellside',
    );
    expect(actual).toEqual(
      '<a href="https://sellside.com" title="Sellside">Sellside</a>',
    );
  });

  it('should support boolean attrubues', () => {
    expect(tag('details', { open: true })).toEqual('<details open></details>');
    expect(tag('details', { open: false })).toEqual('<details></details>');
  });

  it('should create a void element with no attributes', () => {
    expect(tag('br')).toEqual('<br>');
    expect(tag('hr')).toEqual('<hr>');
  });

  it('should add text after a void element', () => {
    expect(tag('br', 'foo')).toEqual('<br>foo');
  });

  it('should create a void element with attributes', () => {
    expect(tag('img', { src: 'foo.jpg' })).toEqual('<img src="foo.jpg">');
  });

  it('should create a void element with multiple attributes', () => {
    expect(tag('link', { rel: 'stylesheet', href: 'styles.css' })).toEqual(
      '<link rel="stylesheet" href="styles.css">',
    );
  });

  it('should force a custom void element', () => {
    expect(tag('P', 'This is random text...', false)).toEqual(
      '<P>This is random text...',
    );
    expect(tag('P', false)).toEqual('<P>');
  });

  it('should create an empty text node and a closing tag', () => {
    expect(tag('a', { href: 'foo.html' })).toEqual('<a href="foo.html"></a>');
  });

  it('should throw an error when text is defined but not a string', () => {
    expect(() => {
      tag('a', { href: 'foo.html' }, []);
    }).toThrow();

    expect(() => {
      tag('a', { href: 'foo.html' }, {});
    }).toThrow();

    expect(() => {
      tag('a', { href: 'foo.html' }, true);
    }).toThrow();
  });
});
