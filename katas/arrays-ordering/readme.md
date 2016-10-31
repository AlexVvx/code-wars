####Description:

Write a function that takes a single array as an argument (containing multiple strings and/or positive numbers and/or arrays),
and returns one of four possible string values, depending on the ordering of the lengths of the elements in the input array.
Your function should return:
- “Increasing” - if the lengths of the elements increase from left to right (although it is possible that some neighbouring elements may also be equal in length)
- “Decreasing” - if the lengths of the elements decrease from left to right (although it is possible that some neighbouring elements may also be equal in length)
- “Unsorted” - if the lengths of the elements fluctuate from left to right
- “Constant” - if all element's lengths are the same.

####Example:

```js
arraysOrdering([123, 1234, 12345, 123456]) ==> Increasing
arraysOrdering(["abcde", "abcd", "abc"]) ==> Decreasing
arraysOrdering(["abc", "abcde", "c"]) ==> Unsorted
arraysOrdering([1, "b", ["p"], 2]) ==> Constant
```

See [tests in arrays-ordering_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/arrays-ordering/arrays-ordering_test.js)

#####[Original Kata](https://www.codewars.com/kata/identify-the-arrays-ordering)

Good luck
