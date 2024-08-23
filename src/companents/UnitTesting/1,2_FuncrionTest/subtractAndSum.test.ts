import { expect, test } from "vitest";
import { subtract, sum } from "./subtractAndSum";



///// fu 1
test('sum add tow  number', () => {
    expect(sum(3,7)).toBe(10);
  });
  test('sum add tow  number the first -2', () => {
    expect(sum(-2,7)).toBe(5);
  });
  test('sum add tow  number', () => {
    expect(sum(0,0)).toBe(0);
  });
  
  ///// fu 2
  test('subtract subtracts number', () => {
    expect(subtract(7, 3)).toBe(4);
  });

  test('subtract subtracts number first -1', () => {
    expect(subtract(-1, 3)).toBe(-4);
  });
  test('subtract subtracts number end number munis', () => {
    expect(subtract(-1, -3)).toBe(2);
  });
  test('subtract subtracts number', () => {
    expect(subtract(0, 0)).toBe(0);
  });
  