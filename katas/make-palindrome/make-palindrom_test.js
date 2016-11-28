describe('makePalindrome function', function() {

    it('should return existing palindromes without modification', function() {
        expect(makePalindrome('a')).toBe('a');
        expect(makePalindrome('radar')).toBe('radar');
        expect(makePalindrome('racecar')).toBe('racecar');
    });

    it('expand strings to form palindromes', function() {
        expect(makePalindrome('ab')).toBe('aba');
        expect(makePalindrome('abb')).toBe('abba');
        expect(makePalindrome('abc')).toBe('abcba');
        expect(makePalindrome('rad')).toBe('radar');
        expect(makePalindrome('race')).toBe('racecar');
    });
});
