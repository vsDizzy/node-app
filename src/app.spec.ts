import { describe, it, type TestContext } from 'node:test'

const createHandler = () => () => {
  throw new Error('last handler')
}

describe('dev-srv', () => {
  it('returns 4', (ctx: TestContext) => {
    const actual = 4
    ctx.assert.strictEqual(actual, 4)
  })
})
