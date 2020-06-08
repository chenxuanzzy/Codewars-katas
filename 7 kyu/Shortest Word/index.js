/* 
Title:
    Shortest Word
    
Description:
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.

  翻譯蒟蒻：找出英文句子中最短的長度單字


Sample Tests::
    Test.describe("Example tests",_=>{
    Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
});

Kata Link:
    https://www.codewars.com/kata/shortest-word

Solutions Link:
    https://www.codewars.com/kata/shortest-word/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Shortest-Word#index.js


*/

// My solution


function findShort(s){
    let strArr = s.split(" ");
    let short = strArr[0].length;
    for(let i = 0; i < strArr.length ; i++){
      //console.log(short)
      //console.log(strArr[i].length)
      //console.log('------------')
      if(short > strArr[i].length){
        short = strArr[i].length;
        //每一次的 short 不是固定的
      }
    }
    return short
  }
  findShort("bitcoin take over the world maybe who knows perhaps")