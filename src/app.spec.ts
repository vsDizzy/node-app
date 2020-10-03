import { fn } from './app';

describe(fn.name, () => {
  it('should return number', () => {
    expect(fn()).toBe(4);
  });
});
