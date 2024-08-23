export function isEven(num: number): boolean {
    return num % 2 === 0;
}

export function findMax(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}
