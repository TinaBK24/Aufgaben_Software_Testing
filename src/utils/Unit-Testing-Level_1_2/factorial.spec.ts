import { factorial } from "./factorial";

describe('factorial', () => {
    it('should return 1 for 0', () => {
        const result = factorial(0);
        expect(result).toBe(1);
    });

    it('should return 1 for 1', () => {
        const result = factorial(1);
        expect(result).toBe(1);
    });

    it('should return 6 for 3', () => {
        const result = factorial(3);
        expect(result).toBe(6);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => factorial(-1)).toThrow();
    });

    it('should throw an error for non-integer inputs', () => {
        expect(() => factorial(3.5 as unknown as number)).toThrow();
    });
})