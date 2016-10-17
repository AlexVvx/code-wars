describe('findAndSort function', function() {
    var massive = [100,200,4,5,18,-300,-20,2,5,-7,4,3,-100,80];
    var leftLimit = -20;
    var rightLimit = 20;
    var result = [100,200,-20,-7,2,3,4,4,5,5,18,-300,-100,80];

    it('should correctly format provided array and return result', function() {
        expect(findAndSort(massive, leftLimit, rightLimit)).toEqual(result);
    });

    it('should correctly format provided array', function() {
        massive = [9,8,7,6,5,4,3,2,1,10];
        leftLimit = 8;
        rightLimit = 10;
        result = [8,9,10,7,6,5,4,3,2,1];

        expect(findAndSort(massive, leftLimit, rightLimit)).toEqual(result);
    });

    it('should return array without changes if in provided massive no values from "gap"', function() {
        massive = [100,-200,300, 23];
        
        expect(findAndSort(massive, leftLimit, rightLimit)).toEqual(massive);
    });
});
