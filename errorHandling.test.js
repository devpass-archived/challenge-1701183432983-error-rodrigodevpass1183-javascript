const { divide } = require('./errorHandling');

test('Divide valid numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

test('Throw error for invalid numbers', () => {
  expect(() => {
    divide('abc', 2);
  }).toThrow('Invalid numbers provided');
});

test('Throw error for division by zero', () => {
  expect(() => {
    divide(10, 0);
  }).toThrow('Cannot divide by zero');
});