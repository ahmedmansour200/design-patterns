import { expect, test } from "vitest";
import { findMax, isEven } from "./IsEvenAndFindMax";

test('isEven returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });
  
  test('isEven returns false for odd numbers', () => {
    expect(isEven(5)).toBe(false);
  });
  
  test('isEven works with negative even numbers', () => {
    expect(isEven(-4)).toBe(true);
  });
  
  test('isEven works with zero', () => {
    expect(isEven(0)).toBe(true);
  });

  /////////

  test('findMax returns the maximum number in the array', () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  });
  
  test('findMax works with negative numbers', () => {
    expect(findMax([-10, -5, -3, -20])).toBe(-3);
  });
  
  test('findMax returns undefined for an empty array', () => {
    expect(findMax([])).toBeUndefined();
  });