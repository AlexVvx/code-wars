describe('calculateFlips', function() {

    it('should calculate number of flips correctly', function() {

        var lockMatrix =    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                             [0,0,0,0,0,0,0,0,1,0,0,0,0,0]
                             [0,0,0,1,1,0,0,1,1,0,0,1,0,0]
                             [0,1,1,1,1,1,1,1,1,1,1,1,1,1]     
                             [0,0,1,1,1,1,1,0,1,1,0,0,0,0]          
                             [0,0,0,0,1,0,0,0,1,0,0,0,0,0]
                             [0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

        var keyMatrix =    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                             [0,0,0,0,0,0,0,0,1,0,0,0,0,0]
                             [0,0,1,1,1,0,0,0,1,0,0,0,0,0]
                             [0,1,1,1,1,1,1,1,1,1,1,1,1,1]     
                             [0,0,0,1,1,1,1,1,1,1,0,1,0,0]          
                             [0,0,0,0,1,0,0,0,1,0,0,0,0,0]
                             [0,0,0,0,0,0,0,0,0,0,0,0,0,0]];    

        expect(calculateFlips(lockMatrix, keyMatrix)).toBe(3);
    });
});