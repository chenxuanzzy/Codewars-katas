/* 
Title:
    Disemvowel Trolls
    
Description:
    Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string with all vowels removed.

    For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.

    中文翻譯：給你字串，請去除掉母音的部分 (大小寫都要去除)


Sample Tests::
   Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")

Kata Link:
    https://www.codewars.com/kata/disemvowel-trolls

Solutions Link:
    https://www.codewars.com/kata/disemvowel-trolls/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Disemvowel-Trolls
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
