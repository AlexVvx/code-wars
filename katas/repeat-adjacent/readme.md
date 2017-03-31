### Description:

You are given a string s. Let's call its substring a group, if all letters in it are adjacent and the same(such as "aa","bbb","cccc"..).
Let's call the substiring with 2 or more adjacent group a big group(such as "aabb","bbccc"...).

Your task is to count the number of big groups in the given string.

### Important: 

[input] string s

A string of lowercase Latin letters.
[output] an integer

The number of big groups.

### Example:
For s = "ccccoodeffffiiighhhhhhhhhhttttttts", the result should be 3.

```js
The groups are "cccc", "oo", "ffff", "iii", "hhhhhhhhhh", "ttttttt"
The big groups are "ccccoo", "ffffiii", "hhhhhhhhhhttttttt",
3 substrings altogether.
```
For s = "gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp", the result should be 2.

```js
The big groups are :
"xxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmm"
and
"tttttttlllll"
```

For s = "soooooldieeeeeer", the result should be 0.

There is no big group exist.

See [tests in repeat-adjacent_test.js](https://github.com/AlexVvx/code-wars/tree/master/katas/repeat-adjacent/repeat-adjacent_test.js)

Good luck

#####[Original Kata](https://www.codewars.com/kata/simple-fun-number-180-repeat-adjacent)
