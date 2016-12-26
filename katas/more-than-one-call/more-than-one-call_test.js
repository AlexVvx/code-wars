describe('sum function', function() {

    it('should return the sum of the numbers.', function() {
        expect(sum(2,3)).toBe(5);
        expect(sum(2)(3)).toBe(5);
        expect(sum(3)(3)(1)).toBe(7);
    });
});
