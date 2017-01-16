####Description:

This challenge is to understand suitable or not the key to the lock. If provided key suitable for provided lock scheme 
you must calculate ... Smashing!! But at first you should understand schemes of key and lock!

####Pay attention on example:

00000000000000
00000000100000
00011001100100
01111111111111     <--  Lock presented as a matrix with 1 - 'groove'(KEYHOLE) and 0 - material 
00111110110000          
00001000100000
00000000000000

00000000000000
00000000100000
00111000100000
01111111111111     <-- Key presented as a matrix too with 1 - part of key and 0 - hole
00011111110100
00001000100000
00000000000000

KEY consist of n parts that divide horizontally to separate 'link' (horizontally lenght of each part 1 matrix cell lenght).

You can FLIP 180 degrees each part of key to achieve FULL compatibility with KEYHOLE!!!

And you must calculate minimum of 'flips' with the parts of key.

Example of one flip with fourth from left part of key:
   
   1
   1 
1111111  -->  1111111  
    1            11
                 1

Result of 'flips' for exmple lock and key matrix  --->> 3   (2 part, 7 part and 11 part)             

See [tests in turn-the-key-to-open-a-lock_test.js](https://github.com/AlexVvx/code-wars/blob/master/katas/turn-the-key-to-open-a-lock_test/turn-the-key-to-open-a-lock_test.js)

Good luck!!!!!!!!!
