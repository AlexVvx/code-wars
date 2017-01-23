describe('arrayToTree', function() {
    var TreeNode = function(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    };

    it('should return correct tree according to the provided array with multiple elements', function() {
        var array = [17, 0, -4, 3, 15];
        var expectedTree = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
        expect(arrayToTree(array)).toEqual(expectedTree);
    });
});
