import { describe, expect, test } from 'vitest';
import { RangeIterator, range } from './Iterators';

describe('RangeIterator', () => {
  test('iterates correctly over a range of numbers', () => {
    const iterator = new RangeIterator(1, 5, 1);
    let result = [];
    let nextValue;

    while (!(nextValue = iterator.next()).done) {
      result.push(nextValue.value);
    }

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('handles custom step', () => {
    const iterator = new RangeIterator(1, 10, 2);
    let result = [];
    let nextValue;

    while (!(nextValue = iterator.next()).done) {
      result.push(nextValue.value);
    }

    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  test('returns an empty array if start >= end', () => {
    const iterator1 = new RangeIterator(5, 5, 1);
    const iterator2 = new RangeIterator(5, 1, 1);

    let result1 = [];
    let result2 = [];
    let nextValue1, nextValue2;

    while (!(nextValue1 = iterator1.next()).done) {
      result1.push(nextValue1.value);
    }
    while (!(nextValue2 = iterator2.next()).done) {
      result2.push(nextValue2.value);
    }

    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  test('returns only the start value if step is greater than range', () => {
    const iterator = new RangeIterator(1, 5, 10);
    let result = [];
    let nextValue;

    while (!(nextValue = iterator.next()).done) {
      result.push(nextValue.value);
    }

    expect(result).toEqual([1]);
  });

  test('throws an error with non-positive step', () => {
    expect(() => new RangeIterator(1, 5, 0)).toThrow('Step must be greater than 0');
    expect(() => new RangeIterator(1, 5, -1)).toThrow('Step must be greater than 0');
  });
});


/////////////////

describe('range function', () => {
  test('works as expected with default step of 1', () => {
    const iterator = range(1, 5);
    let result = [];
    let nextValue;

    while (!(nextValue = iterator.next()).done) {
      result.push(nextValue.value);
    }

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('handles custom step', () => {
    const iterator = range(1, 10, 3);
    let result = [];
    let nextValue;

    while (!(nextValue = iterator.next()).done) {
      result.push(nextValue.value);
    }

    expect(result).toEqual([1, 4, 7]);
  });

  test('returns an empty array if start >= end', () => {
    const iterator = range(5, 1, 1);
    let result = [];
    let nextValue;

    while (!(nextValue = iterator.next()).done) {
      result.push(nextValue.value);
    }

    expect(result).toEqual([]);
  });

  test('throws an error if step is zero or negative', () => {
    expect(() => range(1, 5, 0)).toThrow('Step must be greater than 0');
    expect(() => range(1, 5, -1)).toThrow('Step must be greater than 0');
  });
});
