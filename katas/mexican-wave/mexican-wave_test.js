describe('mexican wave', function() {
  it('should return mexican wave', function() {
    expect(wave('hello')).toEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
    expect(wave('codewars')).toEqual(['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']);
    expect(wave('two words')).toEqual(['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']);
    expect(wave(' gap ')).toEqual([' Gap ', ' gAp ', ' gaP ']);
  });
});