describe('isCircuitClosed function', function() {
    let area = [[0,0,0,1,1,0,0,0],
                [0,0,0,1,0,1,0,0],
                [0,0,0,1,0,1,0,0],
                [0,0,0,0,0,0,0,0]];

    it('should return false if circuit is\'nt closed', function() {
        expect(isCircuitClosed(area)).toBe(false);
    });

    it('should return true if circuit closed', function() {
        area[2][4] = 1;
        
        expect(isCircuitClosed(area)).toBe(true);
    });

    it('should return false if only one link in circuit', function() {
        area = [[0,0,0],
                [0,1,0],
                [0,0,0]];

        expect(isCircuitClosed(area)).toBe(false);
    });
});
