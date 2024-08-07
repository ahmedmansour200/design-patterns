export class RangeIterator {
  private current: number;
  private end: number;
  private step: number;

  constructor(start: number, end: number, step: number) {
    this.current = start;
    this.end = end;
    this.step = step;
  }

  next(): IteratorResult<number> {
    if (this.current < this.end) {
      const value = this.current;
      this.current += this.step;
      return { value, done: false };
    }
    return { value: undefined as any, done: true };
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this;
  }
}

function range(start: number, end: number, step: number): IterableIterator<number> {
  return new RangeIterator(start, end, step);
}

// Usage
for (const value of range(0, 10, 1)) {
  console.log(value);
}

console.log([...range(1, 10, 1)]);

const iterator = range(1, 10, 1);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
