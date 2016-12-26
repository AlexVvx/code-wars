describe('more than one call', function() {

    it('should return the sum of the numbers.', function() {
        expect(sum(2,3) == 5).toBeTruthy();
        expect(sum(2)(3) == 5).toBeTruthy();
        expect(sum(3)(3)(1) == 7).toBeTruthy();
    });
});
