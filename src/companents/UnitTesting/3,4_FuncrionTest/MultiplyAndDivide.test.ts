import { expect, test } from "vitest";
import { divide, multiply } from "./MultiplyAndDivide";

test('multiply multiplies two positive numbers together', () => {
    expect(multiply(2, 4)).toBe(8);
  });
  
  test('multiply multiplies a positive and a negative number', () => {
    expect(multiply(-2, 4)).toBe(-8);
  });
  
  test('multiply multiplies by zero', () => {
    expect(multiply(2, 0)).toBe(0);
  });

  //////////////
  
  test('divide divides the first number by the second number', () => {
    expect(divide(10, 2)).toBe(5);
  });
  
  test('divide throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
  
  test('divide works with negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });