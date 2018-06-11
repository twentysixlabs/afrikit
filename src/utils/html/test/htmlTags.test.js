// @flow
import expect from 'expect';
import { htmlTags, voidHtmlTags } from '../htmlTags';

describe('HtmlTags', () => {
  it('should return `html-tags` is an array of HTML tags', () => {
    expect(Array.isArray(htmlTags)).toBeTruthy();
    expect(htmlTags.length > 10 && htmlTags.length < 1000).toBeTruthy();
  });

  it('should return `html-tags/void` is an array of void HTML tags', () => {
    expect(Array.isArray(voidHtmlTags)).toBeTruthy();
    expect(voidHtmlTags.length > 10 && voidHtmlTags.length < 1000).toBeTruthy();
  });
});
