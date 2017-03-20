####Description:

Generators are very useful things in programming, in this series we will learn how to use generators and see how we can apply generators to common programming challenges.

You must complete the generator function that must increment a counter by 1 each time also if a argument is supplied (will always be a number) you must then change the counter to that number.

####Important
The counter must start at 1 when the generator is initialized

#####[Extra task](https://www.codewars.com/kata/multiplication-generators-number-2)

####Example:

```js
function* idMaker() {
  let index = 0;
  while(true) {
    yield index++;
  }
}

let gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

See [tests in basic-generator_test.js](https://github.com/AlexVvx/code-wars/tree/master/katas/basic-generator/basic-generator_test.js)

Good luck

#####[Original Kata](https://www.codewars.com/kata/basics-generators-number-1)
