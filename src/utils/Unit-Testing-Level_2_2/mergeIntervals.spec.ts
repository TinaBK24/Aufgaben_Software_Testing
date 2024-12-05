import { mergeIntervals } from "./mergeIntervals"

describe('mergeIntervals', () => {
    it('should return an empty array for an empty input', () => {
        const result = mergeIntervals([]);
        expect(result).toEqual([]);
    });

    it('should return the same array when no intervals overlap', () => {
        const result = mergeIntervals([[1, 2], [3, 4], [5, 6]]);
        expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    it('should merge all intervals when they all overlap', () => {
        const result = mergeIntervals([[1, 3], [2, 4], [3, 5]]);
        expect(result).toEqual([[1, 5]]);
    });

    it('should merge intervals when one is contained within another', () => {
        const result = mergeIntervals([[1, 5], [2, 3], [4, 7]]);
        expect(result).toEqual([[1, 7]]);
    });

    it('should merge intervals correctly even when input is unordered', () => {
        const result = mergeIntervals([[5, 7], [1, 3], [2, 4]]);
        expect(result).toEqual([[1, 4], [5, 7]]);
    });
})