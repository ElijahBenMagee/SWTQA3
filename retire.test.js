const testVar = require('./retire');

test('Test 1', () => {
  expect(testVar(50,100,100,100)).toBe("50 years old.");
});

test('Test1 1', () => {
  expect(testVar(50,100,1,100)).toBe("Goal cannot be met. You will die first");
});

test('Test1 2', () => {
  expect(testVar(0,0,0,0)).toBe("Bad input, try again.");
});