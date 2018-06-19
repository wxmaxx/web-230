/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 19 June 2018
; Description: Demonstrating ES5 built-in functions
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 5.2")); 
console.log("\n");

// make array of five favorite foods
var foods = ['Sushi', 'Pizza', 'Bulgogi', 'Pistachios', 'Avacado'];

// Create a for each loop to iterate over the array

foods.forEach(function(bob) {
    console.log(bob);
});





// end program