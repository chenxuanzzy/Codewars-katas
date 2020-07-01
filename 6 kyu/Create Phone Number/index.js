/* 
Title:
  Create Phone Number
    
Description:
  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Sample Tests::
    describe('Basic tests', () => {
    Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
});

For example:
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

Kata Link:
  https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript


Solutions Link:
  https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript

My solution on Repl.it link:
  https://repl.it/@chenxuan2019cod/Create-Phone-Number#index.js
    


*/

// My solution

function createPhoneNumber(numbers){
    let ansType = "(xxx) xxx-xxxx";
    for(var i = 0; i < numbers.length; i++)
    {
      ansType = ansType.replace('x', numbers[i]);
    }
    return ansType;
  }
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  //returns "(123) 456-7890"