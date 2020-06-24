/* 
Title:
    Reversed Strings

Description:

    Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'


Kata Link:
    https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

Solutions Link:
    https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/javascript

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Reversed-Strings#index.js
  */

// My solution
    function solution(str){
        let x = str.split("");
        let ans = [];
        for(let i = x.length-1; i >= 0; i--){
        ans.push(x[i])
        }
        return ans.join("")
    }
    solution('hello')
