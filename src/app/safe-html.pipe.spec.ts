import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

let sanitizer: DomSanitizer;

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [DomSanitizer] });
});

describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    sanitizer = TestBed.get(DomSanitizer);
    const pipe = new SafeHtmlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
