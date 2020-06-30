/* 
Title:
  Hamming Distance

Description:
  
  wiki:https://reurl.cc/Njd5Qp

  The Hamming Distance is a measure of similarity between two strings of equal length. 
  
  Complete the function so that it returns the number of positions where the input strings do not match.

Examples (in JavaScript):

  hamming("I like turtles","I like turkeys")  //returns 3

  hamming("Hello World","Hello World")  //returns 0

Kata Link:
    https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript

Solutions Link:
    https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/solutions/javascript

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Hamming-Distance#index.js

*/

// My solution
function hammingDistance(a, b) {
    let str1 = a.split("");
    let str2 = b.split("");
    let emptyspace = [];
    for(let i = 0; i<=str1.length; i++){
      if(str1[i] !== str2[i]){
        emptyspace.push(str1[i]);
      }
    }
    return emptyspace.length
  }


//Test Cases
// [[string1, string2], expected]
const tests = [
    [["I like turtles", "I like turkeys"], 3],
    [["Hello World", "Hello World"], 0],
  ];
  describe("Example",function() {
    for(const [input, expected] of tests) {
      it(`input: ${JSON.stringify(input)}`, function(){
        Test.assertEquals(hamming(input[0], input[1]), expected, "opptional message");
        });
      }
  });