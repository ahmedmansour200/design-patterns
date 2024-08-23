// function Reverse String

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// function  Filter Odd Numbers from an Array

export function filterOddNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 !== 0);
  }