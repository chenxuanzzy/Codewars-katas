/* 
Title:
  Halving Sum
    
Task:
  Given a positive integer n, calculate the following sum::
  n + n/2 + n/4 + n/8 + ...
  All elements of the sum are the results of integer division.

Example:
  25  =>  25 + 12 + 6 + 3 + 1 = 47

Sample Tests::
    Test.describe("Test Case", function() {
    Test.it("Test", function() {
    Test.assertEquals(halvingSum(25),47);
    Test.assertEquals(halvingSum(127),247);
  });
});

Kata Link:
    https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

Solutions Link:
    https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/solutions/javascript

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Halving-Sum#index.js

*/

// My solution
function halvingSum(n) {
  let ans = 0;
  while (n > 0) {
      ans = ans + n;
      n = Math.floor(n / 2);
  }
  return ans;
}
halvingSum(25)