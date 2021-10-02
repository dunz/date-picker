export const range = (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i);
