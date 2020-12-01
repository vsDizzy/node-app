import { fn } from './app'

describe(fn.name, () => {
  it('test 1', () => {
    expect(fn()).toBe(4)
  })
})
