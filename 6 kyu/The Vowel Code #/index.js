/* 
Title:
  The Vowel Code

Description:
  Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

  a -> 1
  e -> 2
  i -> 3
  o -> 4
  u -> 5

  For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

  Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

  For example, decode("h3 th2r2") would return "hi there".

  For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

  翻譯蒟蒻：找到遺失的那個數。(計算等差列數)

Sample Tests:
  describe("Sample tests", function() {
  it("Tests", function() {
    assert.equal(encode('hello'), 'h2ll4');
    assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
    assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
    assert.equal(decode('h2ll4'), 'hello');
  });
});

Kata Link:
    https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

Solutions Link:
    https://www.codewars.com/kata/53697be005f803751e0015aa/solutions


*/

// Other solution
//寫不出來  