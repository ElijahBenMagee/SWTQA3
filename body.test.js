const testVar = require('./body');

test('Test 2', () => {
  expect(testVar(6,0,50)).toBe("underweight");
});

test('Test 3', () => {
  expect(testVar(6,0,150)).toBe("normal weight");
});

test('Test 4', () => {
  expect(testVar(6,0,190)).toBe("overweight");
});

test('Test 5', () => {
  expect(testVar(6,0,300)).toBe("obese");
});

test('Test 7', () => {
  expect(testVar(6,0,400)).toBe("obese");
});


test('Test 6', () => {
  expect(testVar(0,0,500)).toBe("Bad input, try again.");
});


