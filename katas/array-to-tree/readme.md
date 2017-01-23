####Description:

You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

The class TreeNode is available for you:

```js
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
```

####Example:
Given the array [17, 0, -4, 3, 15] you should create the following tree:
```js
    17
   /  \
  0   -4
 / \
3   15
```

See [tests in array-to-tree_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/array-to-tree/array-to-tree_test.js)

Good luck

#####[Original Kata](https://www.codewars.com/kata/fun-with-trees-array-to-tree)
