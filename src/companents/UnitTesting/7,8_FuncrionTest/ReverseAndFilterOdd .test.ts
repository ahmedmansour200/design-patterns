import { expect, test } from "vitest";
import { filterOddNumbers, reverseString } from "./ReverseAndFilterOdd ";

test('reverseString returns the string in reverse order', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  
  test('reverseString works with empty string', () => {
    expect(reverseString('')).toBe('');
  });
  
  test('reverseString works with single character string', () => {
    expect(reverseString('a')).toBe('a');
  });

  //////////////

  test('filterOddNumbers returns only odd numbers from the array', () => {
    expect(filterOddNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  });
  
  test('filterOddNumbers returns an empty array if no odd numbers', () => {
    expect(filterOddNumbers([2, 4, 6])).toEqual([]);
  });
  
  test('filterOddNumbers works with negative odd numbers', () => {
    expect(filterOddNumbers([-1, -2, -3])).toEqual([-1, -3]);
  });