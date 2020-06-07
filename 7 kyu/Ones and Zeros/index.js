/* 
Title:
    Ones and Zeros
    
Description:
    Given an array of ones and zeroes, convert the equivalent binary value to an integer.

    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

    中文翻譯：輸入一個 1 跟 0 的陣列，會輸出整數

Sample Tests:
    describe("One's and Zero's", () => {
    it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

});

For example:
    Testing: [0, 0, 0, 1] ==> 1
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 0, 1] ==> 5
    Testing: [1, 0, 0, 1] ==> 9
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 1, 0] ==> 6
    Testing: [1, 1, 1, 1] ==> 15
    Testing: [1, 0, 1, 1] ==> 11    

Kata Link:
    https://www.codewars.com/kata/ones-and-zeros

Solutions Link:
    https://www.codewars.com/kata/ones-and-zeros/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Grasshopper-Summation


  */

// My solution

function binaryArrayToNumber(arr) {
    let numbinary = arr.join("");
    return parseInt(numbinary, 2);
  }
  binaryArrayToNumber([0,0,0,1])
