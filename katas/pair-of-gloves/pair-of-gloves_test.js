describe('pair of gloves', function() {
	it('should return number of pairs of gloves', function() {
		expect(numberOfPairs(['red', 'red'])).toEqual(1);
		expect(numberOfPairs(['red', 'green', 'blue'])).toEqual(0);
		expect(numberOfPairs(['gray','black','purple','purple','gray','black'])).toEqual(3);
	});
});
