####Description:

Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:
    [a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.

####Example:

```js
let array1 = ["a","a","a","a","a","b","b","b"],
    array2 = ["c","c","c","c","c","d","d","d"];

    balance(array1, array2) //true

    array1 = ["a","a"],
    array2 = ["c"];

    balance(array1, array2) //false

    array1 = ["a","b","c","d","e","f","g","g"];
    array2 = ["h","h","i","j","k","l","m","m"];

    balance(array1, array2) //false
```

See [tests in balance-the-arrays_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/balance-the-arrays/balance-the-arrays_test.js)

#####[Original Kata](https://www.codewars.com/kata/balance-the-arrays)

Good luck
