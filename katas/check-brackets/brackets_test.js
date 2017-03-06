describe('checkBrackets function', function() {
    var config1 = [['(', ')']];
    var config2 = [['(', ')'], ['[', ']']];
    var config3 = [['(', ')'], ['[', ']'], ['{', '}']];
    var config4 = [['|', '|']];
    var config5 = [['(', ')'], ['|', '|']];
    var config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
    var config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

    it('should checkBrackets if brackets sequence is correct 1', () => {
        expect(checkBrackets('()', config1)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is correct 2', () => {
        expect(checkBrackets('((()))()', config1)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is not correct 3', () => {
        expect(checkBrackets('())(', config1)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is correct 4', () => {
        expect(checkBrackets('([{}])', config3)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is not correct 5', () => {
        expect(checkBrackets('[(])', config2)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is correct 6', () => {
        expect(checkBrackets('[]()', config2)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is correct 7', () => {
        expect(checkBrackets('[]()(', config2)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is correct 8', () => {
        expect(checkBrackets('||', config4)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is correct 9', () => {
        expect(checkBrackets('|()|', config5)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is not correct 10', () => {
        expect(checkBrackets('|(|)', config5)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is correct 11', () => {
        expect(checkBrackets('|()|(||)||', config5)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is correct 12', () => {
        expect(checkBrackets('111115611111111222288888822225577877778775555666677777777776622222', config6)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is correct 13', () => {
        expect(checkBrackets('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is correct 14', () => {
        expect(checkBrackets('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is correct 15', () => {
        expect(checkBrackets('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6)).toBeTruthy();
    });

    it('should checkBrackets if brackets sequence is not correct 16', () => {
        expect(checkBrackets('[]][[]', config3)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is not correct 17', () => {
        expect(checkBrackets('[]][[]', config2)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is not correct 18', () => {
        expect(checkBrackets('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7)).toBeFalsy();
    });

    it('should checkBrackets if brackets sequence is correct 19', () => {
        expect(checkBrackets('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7)).toBeTruthy();
    });
});
