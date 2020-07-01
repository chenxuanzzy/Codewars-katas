/* 
Title:
    Credit Card Mask
    
Description:
    Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
    
    However, since someone could look over your shoulder, you don't want that shown on your screen.  Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.


Sample Tests::
   Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")

Kata Link:
    https://www.codewars.com/kata/disemvowel-trolls

Solutions Link:
    https://www.codewars.com/kata/disemvowel-trolls/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Disemvowel-Trolls/history
  */

// My solution


function disemvowel(str) {
  var divedStr = str.split("");
  var vowel = "aeiouAEIOU".split("");
  for(i = 0; i < str.length ; i++){
    for(j = 0; j < vowel.length; j++){
      if(divedStr[i] === vowel[j]){
        divedStr.splice(i, 1, "")
      }
    }
  }
  var str = divedStr.join("");
  return str;
  }
disemvowel("This website is for losers LOL!")