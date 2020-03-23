process.env.SLACK_WEBHOOK = 'http://...'

import config from '../src/index'

test('should pass', () => {
  expect(config).toMatchSnapshot()
})
