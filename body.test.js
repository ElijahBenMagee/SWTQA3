const testVar = require('./body');

test('Test 2', () => {
  expect(testVar(5,5,500)).toBe("obese");
});

test('Test 3', () => {
  expect(testVar(0,0,500)).toBe("obese");
});
