####Description:

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

####Example:

```js
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
```

See [tests in persistent-bugger_test.js](https://github.com/AlexVvx/code-wars/tree/master/katas/persistent-bugger/persistent-bugger_test.js)

Good luck

#####[Original Kata](https://www.codewars.com/kata/persistent-bugger)
