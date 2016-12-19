describe('count of positives and sum of negatives', function() {

    it('should count positive numbers and sum negative numbers', function() {
        expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toEqual([10, -65]);
        expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toEqual([8, -50]);
    });

    it('should return an empty array when input array is empty or null', function() {
        expect(countPositivesSumNegatives([])).toEqual([]);
        expect(countPositivesSumNegatives(null)).toEqual([]);
    });
});
