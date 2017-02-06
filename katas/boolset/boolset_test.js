describe('boolset function', function() {
    it('should return correct array', function() {
        var array = ['C', true, 'R', false,'O', true, 'D', true, 'E', true, 'P', false];

        expect(boolset(array)).toEqual(['C', 'O', 'D', 'E']);
    });
});
