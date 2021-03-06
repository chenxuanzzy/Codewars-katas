/* 
Title:
    You're a square!
    
Description:
    You like building blocks. You especially like building blocks that are squares.
    
    And what you even like more, is to arrange them into a square of square building blocks!

    However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle!
    
    Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! 
    
    That's it! You just have to check if your number of building blocks is a perfect square.

    Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

    The tests will always use some integral number, so don't worry about that in dynamic typed languages.


    翻譯蒟蒻：請找出這些數字是否能分解成為平方，假如輸入 4 是否是 2 的平方

    Sample Tests:
    Test.describe("isSquare", function(){
    Test.it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});

Kata Link:
    https://www.codewars.com/kata/youre-a-square

Solutions Link:
    https://www.codewars.com/kata/youre-a-square/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Youre-a-square#index.js
  */

// Best solution

var isSquare = function(n){
    return (Math.sqrt(n) % 1 === 0)
  }

// Other solution

var isSquare = function(n){
    for (var x = 0; x <= n; x++) {
      if (n === 0) {
        return true;
      } else if (n / x === x) {
        return true;
      }
    }
    return false;
  }
