import { describe, it, expect } from 'vitest';
import { lib2 } from './lib-2.js';

describe('lib2', () => {
  it('should work', () => {
    expect(lib2()).toEqual('lib-2');
  });
});
