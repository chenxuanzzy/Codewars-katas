/* 
Title:
    Find the stray number
    
Description:
  You are given an odd-length array of integers, in which all of them are the same, except for one single number.

  Complete the method which accepts such an array, and returns that single different number.

  The input array will always be valid! (odd-length >= 3)

Examples 

  翻譯蒟蒻：題目會給你一個奇數長度(整數)的陣列，請找出與其他不相同的數字出來


Sample Tests::
    Test.assertEquals(stray([1, 1, 2]), 2);

Kata Link:
    https://www.codewars.com/kata/find-the-stray-number

Solutions Link:
    https://www.codewars.com/kata/find-the-stray-number/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Find-the-stray-number#index.js


*/

// My solution

function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
        return numbers[i];
      }
    }
  }