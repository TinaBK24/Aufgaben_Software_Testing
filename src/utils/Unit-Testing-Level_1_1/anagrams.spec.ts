import { areAnagrams } from "./anagrams"

describe('areAnagrams', () => {
    it('should return true for simple anagrams', () => {
        const result = areAnagrams('hallo', 'lloha');
        expect(result).toBe(true);
    });

    it('should return true for anagrams with spaces', () => {
        const result = areAnagrams('hallo world', 'lowo harlld');
        expect(result).toBe(true);
    });

    it('should return true for anagrams with uppercase letters', () => {
        const result = areAnagrams('Hallo World', 'Wollo Harld');
        expect(result).toBe(true);
    });

    it('should return false for strings of different lengths', () => {
        const result = areAnagrams('test', 'testing');
        expect(result).toBe(false);
    });

    it('should handle empty strings as anagrams', () => {
        const result = areAnagrams('', '');
        expect(result).toBe(true);
    });

    it('inputs with numbers', () => {
        const result = areAnagrams('123', '231');
        expect(result).toBe(true);
    });
})