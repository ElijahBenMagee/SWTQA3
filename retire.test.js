const testVar = require('./retire');

test('adds 1 + 2 to equal 3', () => {
  expect(testVar(1000,50,50,50)).toBe("Goal cannot be met. You will die first");
});