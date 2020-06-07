/* 
Title:
    Grasshopper - Summation
    
Description:
    Write a program that finds the summation of every number from 1 to num.
    
    The number will always be a positive integer greater than 0.

    中文翻譯：輸入一個數字會輸出數字的加總

Sample Tests:
    describe('summation', function () {
    it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})

For example:
    summation(2) -> 3
    1 + 2
    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

Kata Link:
    https://www.codewars.com/kata/grasshopper-summation

Solutions Link:
    https://www.codewars.com/kata/grasshopper-summation/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Grasshopper-Summation


  */

// My solution

var summation = function (num) {
    let sumNum = 0;
    for(i = 1; i <= num; i++){
      sumNum += i;
    }
    return sumNum
  }
  summation(8)

