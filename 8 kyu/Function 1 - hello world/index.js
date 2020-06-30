/* 
Title:
    Function 1 - hello world
    
Description:
    Make a simple function called greet that returns the most-famous "hello world!".

    Style Points

    Sure, this is about as easy as it gets. 
    
    But how clever can you be to create the most creative hello world you can think of?
    
    What is a "hello world" solution you would want to show your friends?


Sample Tests::
    describe("Testing function", function() {
  it("Is it a function?", function() {
    Test.assertEquals(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    Test.assertEquals(greet(), "hello world!");
  });
});

Kata Link: https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
    

Solutions Link: https://www.codewars.com/kata/523b4ff7adca849afe000035/solutions/javascript
    

My solution on Repl.it link: https://repl.it/@chenxuan2019cod/Function-1-hello-world#index.js
    
*/

// My solution

function greet(str){
    return "hello world!";
}
