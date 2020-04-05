const testVar = require('./retire');

test('Test 1', () => {
  expect(testVar(1000,50,50,50)).toBe("Goal cannot be met. You will die first");
});

test('Test 2', () => {
  expect(testVar("",50,50,50)).toBe("NaN years old.");
});