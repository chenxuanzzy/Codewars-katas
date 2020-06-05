/* 
Title:
    Binary Addition
    
Description:
    Implement a function that adds two numbers together and returns their sum in binary.
    
    The conversion can be done before, or after the addition.

    The binary number returned should be a string.

    中文翻譯：輸入的數字加總轉換成二進位


Sample Tests::
    Test.describe("addBinary(1,2)", function() {
    var results1 = addBinary(1,2);
    Test.it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
    });
    Test.it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
        });
    });

Kata Link:
    https://www.codewars.com/kata/binary-addition

Solutions Link:
    https://www.codewars.com/kata/binary-addition/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Binary-Addition#index.js


  */

// My solution


function addBinary(a,b) {
    let sum = ( a + b ).toString(2);
    return sum
  }
  addBinary(1, 2)