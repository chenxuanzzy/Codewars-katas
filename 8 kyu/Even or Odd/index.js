/* 
Title:
  Even or Odd
    
Description:
  Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  翻譯蒟蒻：請回傳偶數奇數


Sample Tests::
    Test.assertEquals(even_or_odd(2), "Even")
    Test.assertEquals(even_or_odd(0), "Even")
    Test.assertEquals(even_or_odd(7), "Odd")
    Test.assertEquals(even_or_odd(1), "Odd")

Kata Link:
    https://www.codewars.com/kata/even-or-odd

Solutions Link:
    https://www.codewars.com/kata/even-or-odd/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Even-or-Odd#index.js


*/

// My solution

function even_or_odd(number) {
    if(number % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}