describe('repeatAdjacent tests', function() {

    it('should return correct number of big groups', function() {
        expect(repeatAdjacent("ccccoodeffffiiighhhhhhhhhhttttttts")).toBe(3);
        expect(repeatAdjacent("soooooldieeeeeer")).toBe(0);
        expect(repeatAdjacent("ccccoooooooooooooooooooooooddee")).toBe(1);
        expect(repeatAdjacent("chaaallengee")).toBe(1);
        expect(repeatAdjacent("wwwwaaaarrioooorrrrr")).toBe(2);
        expect(repeatAdjacent("gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp")).toBe(2);
    });
});
