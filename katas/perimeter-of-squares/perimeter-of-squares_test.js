describe('perimeter function', function() {

    it('should return right perimeter of squares in a rectangle', function() {
        expect(perimeter(5)).toBe(80);
        expect(perimeter(7)).toBe(216);
        expect(perimeter(20)).toBe(114624);
        expect(perimeter(30)).toBe(14098308);
    });
});
