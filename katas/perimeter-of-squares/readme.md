####Description:

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Say that S(n) is the nth term of the above sum. So

S(0) = 1, S(1) = 1, S(2) = 2, ... , S(5) = 8

Could you give the sum S of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

S = S(0) + S(1) + ... + S(n) ?

![Fibonacci sequence image](http://i.imgur.com/EYcuB1wm.jpg)

###Hint:
 See Fibonacci sequence and beware of rather big n :-)

###Ref:
 http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

	JS: Due to a misspelling in the reference solution for random tests, 
	have an outer auxiliary function that calculates Fibonacci numbers, 
	name this outer function fib. 
	(More than 500 CW passed the kata so it is now impossible to change the random tests).

####Example:

```js
perimeter(5) --> 80

perimeter(7) --> 216

```

See [tests in perimeter-of-squares_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/perimeter-of-squares/perimeter-of-squares_test.js)

#####[Original Kata](https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle)

Good luck
