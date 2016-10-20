describe('FirstNonRepeatingLetter function', function() {
  it('should return result correctly', function() {
    expect(firstNonRepeatingLetter('a')).toEqual('a');
    expect(firstNonRepeatingLetter('stress')).toEqual('t');
    expect(firstNonRepeatingLetter('moonmen')).toEqual('e');
  });

  it('should return empty string if string contains all repeating characters', function() {
    expect(firstNonRepeatingLetter('aaaaaaa')).toEqual('');
  });
});
