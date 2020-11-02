import config from '../src'

process.env.SLACK_WEBHOOK = 'http://...'

// eslint-disable-next-line jest/require-top-level-describe
test('should pass', () => {
  expect.assertions(1)

  expect(config).toMatchSnapshot()
})
