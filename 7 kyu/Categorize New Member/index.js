/* 
Title:
  Categorize New Member
    
Description:
  The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
  
  They would like your help with an application form that will tell prospective members which category they will be placed.

  To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
  
  In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input:
  Input will consist of a list of lists containing two items each. 
    
  Each list contains information for a single potential member. 
    
  Information consists of an integer for the person's age and an integer for the person's handicap.

  Note for F#: The input will be of (int list list) which is a List<List>

Example Input:
  [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

Output:
  Output will consist of a list of string values (in Haskell: Open or Senior) stating whether 
    
  the respective member is to be placed in the senior or open category.

Example Output:
  ["Open", "Open", "Senior", "Open", "Open", "Senior"]

Sample Tests::
  Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
  Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
  Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");

Kata Link:
    https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

Solutions Link:
    https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/solutions

Other solution on My Repl.it link:
    https://repl.it/@chenxuan2019cod/Categorize-New-Member#index.js

*/

// Other solution

function openOrSenior(data){
    let arr = [];
    for (let i = 0; i< data.length; i++){
      arr[i] = 'Open';
      if(data[i][0] >= 55 && data[i][1] >7 ){
        arr[i] = 'Senior';
      }
    }
    return arr;
  }
  