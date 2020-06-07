/* 
Title:
    Basic Mathematical Operations
    
Description:
  Your task is to create a function that does four basic mathematical operations.

  The function should take three arguments - operation(string/char), value1(number), value2(number).

  The function should return result of numbers after applying the chosen operation.

  中文翻譯：給你運算子，計算 value1 和 value2 的值


Sample Tests::
  console.log("Basic tests\n");
  Test.assertSimilar(basicOp('+', 4, 7), 11);
  Test.assertSimilar(basicOp('-', 15, 18), -3);
  Test.assertSimilar(basicOp('*', 5, 5), 25);
  Test.assertSimilar(basicOp('/', 49, 7), 7);

Kata Link:
    https://www.codewars.com/kata/basic-mathematical-operations

Solutions Link:
    https://www.codewars.com/kata/basic-mathematical-operations/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Basic-Mathematical-Operations#index.js


*/

// My solution


function basicOp(operation, value1, value2)
{
  if(operation === '+'){
    return value1 + value2
  }else if(operation === '-'){
    return value1 - value2
  }else if(operation === '*'){
    return value1 * value2
  }else if(operation === '/'){
    return value1 / value2
  }
}
basicOp('+', 4, 7)