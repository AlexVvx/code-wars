describe('sum function', function() {

    it('should return the sum of the numbers.', function() {
        Test.expect(sum(2,3), 5);
        Test.expect(sum(2)(3), 5);
        Test.expect(sum(3)(3)(1), 7);
    });
});
