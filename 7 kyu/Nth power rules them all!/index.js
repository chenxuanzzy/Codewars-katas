/* 
Title:
  Nth power rules them all!

Description:
  You are provided with array of positive non-zero ints and int n representing n-th power (n >= 2).

    For the given array, calculate the sum of each value to the n-th power. Then subtract the sum of the original array.

    Example 1: Input: {1, 2, 3}, 3 --> (1 ^ 3 + 2 ^ 3 + 3 ^ 3 ) - (1 + 2 + 3) --> 36 - 6 --> Output: 30

    Example 2: Input: {1, 2}, 5 --> (1 ^ 5 + 2 ^ 5) - (1 + 2) --> 33 - 3 --> Output: 30

  翻譯蒟蒻：找到遺失的那個數。(計算等差列數)

Example:
  findMissing([1, 3, 5, 9, 11]) == 7

Sample Tests:
    Test.describe('Your "modifiedSum" function', function () {
    Test.it('should work for the examples provided in the Description', function () {
    Test.assertEquals(modifiedSum([1, 2, 3], 3), 30); 
    Test.assertEquals(modifiedSum([1, 2], 5), 30);
  });
});

Kata Link:
    https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

Solutions Link:
    https://www.codewars.com/kata/58aed2cafab8faca1d000e20/solutions/javascript

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Nth-power-rules-them-all#index.js


*/

// My solution

function modifiedSum(a, n) {
    let manyNum = 0;
    let count = 0;
    for(let x = 0; x < a.length; x++){
      count += Math.pow(a[x], n);
      manyNum += a[x];
    }
    return count - manyNum;
  }
modifiedSum([1, 2], 5)