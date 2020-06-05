/* 
Title:
    Get the Middle Character
    取得中間的字

Description:
    You are going to be given a word. 
    Your job is to return the middle character of the word.
    If the word's length is odd, return the middle character. 
    If the word's length is even, return the middle 2 characters.
    題目會給你字元，你的工作就是回傳那些的字的中間的字。
    如果字的長度是奇數，回傳在字串中間的字。
    如果字的長度是偶數，回傳字串中間兩個字。

Examples:
    Kata.getMiddle("test") should return "es"

    Kata.getMiddle("testing") should return "t"

    Kata.getMiddle("middle") should return "dd"

    Kata.getMiddle("A") should return "A"


Kata Link:
    https://www.codewars.com/kata/get-the-middle-character

Solutions Link:
    https://www.codewars.com/kata/get-the-middle-character/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Get-the-Middle-Character

  */

// My solution

function getMiddle(s) {
    let halfString = Math.floor(s.length / 2)
    if(s.length % 2 == 0){
      return (s[halfString - 1] + s[halfString])
    }
    else if(s.length % 2 !== 0){
      return s[halfString]
    }
  }
getMiddle("test") 