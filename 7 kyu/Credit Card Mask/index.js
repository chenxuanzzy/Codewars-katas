/* 
Title:
    Credit Card Mask
    
Description:
    Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
    
    However, since someone could look over your shoulder, you don't want that shown on your screen.  Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.

Example:
    maskify("4556364607935616") == "############5616"
    maskify(     "64607935616") ==      "#######5616"
    maskify(               "1") ==                "1"
    maskify(                "") ==                 ""

    // "What was the name of your first pet?"
    maskify("Skippy")                                   == "##ippy"
    maskify("Nananananananananananananananana Batman!")

Sample Tests::
   describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});

Kata Link:
    https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

Solutions Link:
    https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Credit-Card-Mask#index.js

  */

// My solution

function maskify(cc) {
  str = cc.split("");
  for(let i = 0; i < cc.length - 4; i++){
    str[i] = "#";
}
return str.join("")
}
maskify("12345")
