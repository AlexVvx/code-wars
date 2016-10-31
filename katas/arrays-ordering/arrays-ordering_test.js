describe('arrays ordering', function() {
	it('should return Increasing if the lengths of the elements increase from left to right ', function() {
		expect(arraysOrdering([123, 1234, 12345, 123456])).toEqual('Increasing');
		expect(arraysOrdering([1, 2, 3, 4, 56])).toEqual('Increasing');
		expect(arraysOrdering([['yz'],['uv', 'wx'],['ab','cdef', 'g'],['hi','jk','lmnopq']])).toEqual('Increasing');
	});

	it('should return Decreasing if the lengths of the elements decrease from left to right', function() {
		expect(arraysOrdering(['abcde', 'abcd', 'abc'])).toEqual('Decreasing');
		expect(arraysOrdering([[1, 2, 3, 4], [5, 6, 7], [8, 9]])).toEqual('Decreasing');
		expect(arraysOrdering([[1, 23, 456, 78910], ['abcdef', 'ghijklmno', 'pqrstuvwxy'], [[1, 23, 456, 78910, ['abcdef', 'ghijklmno', 'pqrstuvwxy']], 1234]])).toEqual('Decreasing');
	});

	it('should return Unsorted if the lengths of the elements fluctuate from left to right', function() {
		expect(arraysOrdering(['abc', 'abcde', 'c'])).toEqual('Unsorted');
		expect(arraysOrdering(['a', 'abc', 'abcde', 'ab'])).toEqual('Unsorted');
	});

	it('should return Constant  if all element\'s lengths are the same', function() {
		expect(arraysOrdering(['a', 'b', 'c'])).toEqual('Constant');
		expect(arraysOrdering([1, 'b', ['p'], 2])).toEqual('Constant');
	});
});
