/* 
Title:
  Where my anagrams at?

Description:
  What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

  'abba' & 'baab' == true

  'abba' & 'bbaa' == true

  'abba' & 'abbba' == false

  'abba' & 'abca' == false

  Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. 
  
  You should return an array of all the anagrams or an empty array if there are none. For example:

  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

  anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

  翻譯蒟蒻：字謎遊戲，給你英文你需要利用現有的字母重組，不可多也不可少


Test Driven Development:
// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted.

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});

Kata Link:
    https://www.codewars.com/kata/where-my-anagrams-at

Solutions Link:
    https://www.codewars.com/kata/where-my-anagrams-at/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/A-Needle-in-the-Haystack#index.js


*/

// best solution


String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}