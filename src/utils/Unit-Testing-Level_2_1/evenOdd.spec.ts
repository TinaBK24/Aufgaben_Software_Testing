import { evenOdd } from "./evenOdd"

describe('evenOdd', () => {
    it('should return an empty array for 0', () => {
        const result = evenOdd(0);
        expect(result).toEqual([])
    });

    it('should return ["Odd"] for 1', () => {
        const result = evenOdd(1);
        expect(result).toEqual(['Odd']);
    });

    it('should return ["Odd", "Even"] for 2', () => {
        const result = evenOdd(2);
        expect(result).toEqual(['Odd', 'Even']);
    });

    it('should return ["Odd", "Even", "Odd", "Even", "Odd"] for 5', () => {
        const result = evenOdd(5);
        expect(result).toEqual(['Odd', 'Even', 'Odd', 'Even', 'Odd']);
    });

    it('should return an empty array for negative numbers', () => {
        const result = evenOdd(-1);
        expect(result).toEqual([]);
    });
})