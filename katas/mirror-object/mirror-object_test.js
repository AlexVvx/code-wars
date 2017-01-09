describe('mirror object', function() {

	it('should return mirrored object', function() {
		expect(mirrorObject({abc: '-', arara: '-', xyz: '-'})).toEqual({abc: 'cba', arara: 'arara', xyz: 'zyx'});
	});
});
