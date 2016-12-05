describe('balance function', function() {

    it('should return false if provided arrays aren\'t balanced', function() {
        let array1 = ["a","a"],
            array2 = ["c"];

        expect(balance(array1, array2)).toBeFalsy();

        array1 = ["a","b","c","d","e","f","g","g"];
        array2 = ["h","h","i","j","k","l","m","m"];

        expect(balance(array1, array2)).toBeFalsy();
    });

    it('should return true if provided arrays aren\'t balanced', function() {
        let array1 = ["a","a","a","a","a","b","b","b"],
            array2 = ["c","c","c","c","c","d","d","d"];

        expect(balance(array1, array2)).toBeTruthy();
    });
});
