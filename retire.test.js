const testVar = require('./retire');

test('adds 1 + 2 to equal 3', () => {
  expect(testVar()).toBe(3);
});