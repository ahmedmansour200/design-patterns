export class RangeIterator {
  private current: number;
  private end: number;
  private step: number;

  constructor(start: number, end: number, step: number) {
    if (step <= 0) {
      throw new Error('Step must be greater than 0');
    }

    this.current = start;
    this.end = end;
    this.step = step;
  }

  public next(): { value: number | undefined; done: boolean } {
    if (this.current < this.end) {
      const value = this.current;
      this.current += this.step;
      return { value, done: false };
    }
    return { value: undefined, done: true };
  }
}

export function range(start: number, end: number, step: number = 1): RangeIterator {
  return new RangeIterator(start, end, step);
}
