/* 
Title:
    Counting sheep...
    
Description:
  Consider an array/list of sheep where some sheep may be missing from their place. 
  
  We need a function that counts the number of sheep present in the array (true means present).

  Don't forget to check for bad values like null / undefined

  翻譯蒟蒻：給你 ture 跟 false 的陣列，數看看有幾個 ture


Sample Tests::
    var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
    Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")

Kata Link:
    https://www.codewars.com/kata/counting-sheep-dot-dot-dot

Solutions Link:
    https://www.codewars.com/kata/counting-sheep-dot-dot-dot/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Counting-sheep#index.js


*/

// My solution
    function countSheeps(arryOfSheep){
        let sheep = 0;
        for(let i = 0; i < arryOfSheep.length; i++){
            if(sheep[i] === true){
                sheep++;
            }
        }
        return sheep
    }
