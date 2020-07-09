/* 
Title:
  Welcome!
    
Description:
  Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
  
  Marketing thinks it would be great to welcome visitors to the site in their own language.
  
  Luckily you already use an API that detects the user's location, so this is an easy win.

The Task:
  Think of a way to store the languages as a database (eg an object). 
  
  The languages are listed below so you can copy and paste!
  
  Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. 
  
  It should default to English if the language is not in the database, or in the event of an invalid input.

The Database:
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'

Possible invalid inputs include:
    IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
    IP_ADDRESS_NOT_FOUND - ip address not in the database
    IP_ADDRESS_REQUIRED - no ip address was supplied

Sample Tests::
    Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
    Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
    Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");

Kata Link:
    https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

Solutions Link:
    https://www.codewars.com/kata/577ff15ad648a14b780000e7/solutions

My solution on Repl.it link:
    https://repl.it/@chenxuan2019cod/Welcome#index.js

*/

// My solution

let object = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    };

function greet(language) {
    return object[language] || "Welcome";
}
greet("english")