/* 
Title:
    Jaden Casing Strings
    
Description:
    Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
    
    Jaden is also known for some of his philosophy that he delivers via Twitter. 
    
    When writing on Twitter, he is known for almost always capitalizing every word. 
    
    For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

    Your task is to convert strings to how they would be written by Jaden Smith. 
    
    The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

    翻譯蒟蒻：輸入一串英文句子，所有空白後面的第一個字都都改成大寫

Sample Tests:
    var str = "How can mirrors be real if our eyes aren't real";
    Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

Example:
    Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
    Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"  

Kata Link:
    https://www.codewars.com/kata/jaden-casing-strings

Solutions Link:
    https://www.codewars.com/kata/jaden-casing-strings/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Jaden-Casing-Strings


  */

// My solution

String.prototype.toJadenCase = function () {
    let saveArr = [];
    let sum;
    let space = this.split(" "); //因為題目不是用呼叫的方式，所以要用全域的方法去找句子 ( 可以想成句子在外面全域的世界內 )
    //先將空白去除
    //console.log(x);
  for(var i = 0; i < space.length; i++){
      sum = space[i];
      saveArr.push(sum[0].toUpperCase() + sum.slice(1));
            //sum[ 單詞裡的第 0 個大寫 ] + sum[ 從第 index 1 開始取，
            //因為前面已經把 index 0 的字母 push 進去了，所以剩下的用複製的方式，
            //如果從 0 開始會又重複多一個大寫 ]
    }
    return saveArr.join(" ");
  };
