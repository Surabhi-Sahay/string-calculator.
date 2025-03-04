import { add } from './stringCalculator';

describe('String Calculator', () => {

    test('returns 0 for empty string', () => {
        expect(add("")).toBe(0);
    });

    test('returns number itself for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('returns sum for two comma-separated numbers', () => {
        expect(add("1,2")).toBe(3);
    });

    test('returns sum for any number of comma-separated numbers', () => {
        expect(add("1,2,3,4")).toBe(10);
    });

    test('handles new lines as well as commas between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('supports different delimiters defined in the beginning', () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n1|2|3")).toBe(6);
    });

    test('throws exception for negative numbers', () => {
        expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
    });

});
