/* 
Title:
  Beginner Series #4 Cockroach
    
Description:
  The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

  Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

Sample Tests::
    Test.describe("Basic Tests", function() {
    Test.assertEquals(cockroachSpeed(1.08), 30);
    Test.assertEquals(cockroachSpeed(1.09), 30);
    Test.assertEquals(cockroachSpeed(0), 0);
    });

For example:
    cockroachSpeed(1.08) == 30

Kata Link:
    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

Solutions Link:
    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/solutions/javascript

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Beginner-Series-4-Cockroach#index.js


*/

// My solution

function cockroachSpeed(s) {
    return Math.floor((s * (100000 / 3600)))
                    // km = 100000 / Secs in hour 60 * 60
  }