import config from '../src/index'

test('should pass', () => {
  expect(config).toMatchSnapshot()
})
