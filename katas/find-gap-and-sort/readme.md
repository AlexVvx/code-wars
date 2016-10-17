# Task
Create a function that find in provided array 'gap-massive', sort it in ascending order and return an array with sorted 'gap-massive'.

## Important note
'gap-massive' - part of provided massive with elements that located in the gap between leftLimit and rightLimit inclusively.
The 'gap-massive' must be inserted in position of first gap-element in massive.

## Example

```js
let massive = [100,200,4,5,18,-300,-20,2,5,-7,4,3,-100,80];
let leftLimit = -20;
let rightLimit = 20;

// 'gap-massive' - [4,5,18,-20,2,5,-7,4,3];
// 'gap' - from - 20 to 20;
// 'first gap-element' - 4;

findAndSort(massive, leftLimit, rightLimit); // [100,200,-20,-7,2,3,4,4,5,5,18,-300,-100,80]
```
## Arguments
* massive: initial array.
* leftLimit: a number that set the min limit gap value.
* rightLimit: a number that set the max limit gap value.

See tests in [find-gap-and-sort_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/find-gap-and-sort/find-gap-and-sort_test.js)

## Boilerplate
```js
function findAndSort (massiv, leftLimit, rightLimit) {
    // YOUR SOLUTION GOES HERE
};
```
