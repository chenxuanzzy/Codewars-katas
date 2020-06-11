/* 
Title:
  Find the missing term in an Arithmetic Progression

Description:
  An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. 
  
  You are provided with consecutive elements of an Arithmetic Progression. 
  
  There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.
  
  The rest of the given series is the same as the original AP. Find the missing term.

  You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

  翻譯蒟蒻：找到遺失的那個數。(計算等差列數)

Example:
  findMissing([1, 3, 5, 9, 11]) == 7

Sample Tests:
  fixture.random(10,0);
  fixture.random(10,10);
  fixture.random(10,100);
  fixture.random(10,1000);
  Test.describe("Testing with [1, 3, 4]", function() {
  Test.assertEquals(findMissing([1, 3, 4]), 2);
});

Kata Link:
    https://www.codewars.com/kata/52de553ebb55d1fca3000371

Solutions Link:
    https://www.codewars.com/kata/52de553ebb55d1fca3000371/discuss

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Find-the-missing-term-in-an-Arithmetic-Progression#index.js


*/

// Other solution
var findMissing = function (list) {  
    let a = (list[list.length - 1] - list[0]) / list.length;
    //等差數列公式
    for(let i = 0; i < list.length - 1; i++){
      // console.log(list[i+1] ,list[i])
    if(list[i+1] - list[i] !== a){
    return (list[i] + a)
    }
    }
}