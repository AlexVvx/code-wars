describe('get change', function() {
  it('should return change array', function() {
    expect(getChange(1, 1)).toEqual([0, 0, 0, 0, 0, 0]);
    expect(getChange(1, 5)).toEqual([0, 0, 0, 0, 0, 4]);
    expect(getChange(3.67, 10)).toEqual([3, 0, 1, 1, 0, 6]);
  });
});
