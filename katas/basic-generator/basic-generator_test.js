describe('generator tests', function() {

    it('should return correct data', function() {
        let gen = generator();

        expect(gen.next().value).toEqual(1);
        expect(gen.next().value).toEqual(2);
        expect(gen.next().value).toEqual(3);
        expect(gen.next().value).toEqual(4);
        expect(gen.next().value).toEqual(5);
        expect(gen.next(10).value).toEqual(10);
    });
});
