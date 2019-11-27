import { describe, it, type TestContext } from 'node:test'
import { testFn } from './app.ts'

describe(testFn.name, () => {
  it('returns 4', (ctx: TestContext) => {
    const actual = testFn()
    ctx.assert.strictEqual(actual, 4)
  })
})
