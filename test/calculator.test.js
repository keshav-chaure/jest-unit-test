const calOperations = require('../source/calculator');
describe("Calculator tests", () => {
    debugger
    test('adding 1 + 2 should return 3', () => {
      expect(calOperations.sum(1, 2)).toBe(3);
    });
    test('subtracting 3 - 3 should return0', () => {
        expect(calOperations.diff(3, 3)).toBe(0);
    });
    test("multiplying 2 and 8 should return 16", () => {
        // arrange and act
        var result = calOperations.product(2,8)
      
        // assert
        expect(result).toBe(16);
      });
})