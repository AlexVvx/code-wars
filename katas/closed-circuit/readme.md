# Task
Create a function that check closed or nor circuit in provided 'area'.
Provided 'area' - Martix (n*m) that must contain only 0 and 1 (0 - empty, 1 - circuit link).
Links(1) can connect diagonally (45 degrees).

## Important note
Сircuit will be closed if circuit links form a closed area.
One circuit link(1) isn't closed circuit!

## Example

```js
let area = [[0,0,0,1,1,0,0,0],
            [0,0,0,1,0,1,0,0],
            [0,0,0,1,0,1,0,0],
            [0,0,0,0,0,0,0,0]];

isCircuitClosed(area); // false
area[2][4] = 1
isCircuitClosed(area); // true
```

## Arguments
 ! Only matrix (n*m) !

See tests in [closed-circuit_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/closed-circuit/closed-circuit_test.js)

## Boilerplate
```js
function isCircuitClosed (matrix) {
    // YOUR SOLUTION GOES HERE
};
```
