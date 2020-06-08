/* 
Title:
  Abbreviate a Two Word Name
    
Description:
  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

  The output should be two capital letters with a dot separating them.

  It should look like this:  
  
  Sam Harris => S.H

  Patrick Feeney => P.F

Examples 

  翻譯蒟蒻：請找出字串的大寫


Sample Tests::
    Test.assertEquals(abbrevName("Sam Harris"), "S.H");
    Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
    Test.assertEquals(abbrevName("Evan Cole"), "E.C");
    Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
    Test.assertEquals(abbrevName("David Mendieta"), "D.M");

Kata Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name

Solutions Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Abbreviate-a-Two-Word-Name#index.js


*/

// My solution

function abbrevName(name){
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "," + nameArray[1][0])
  }