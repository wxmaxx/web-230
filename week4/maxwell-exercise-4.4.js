/*
 Expected output:
 FirstName LastName
 Assignment 4.4
 Today's Date
 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada
 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada
 -- SELECTED VALUE --
 Iowa
 */

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 15 June 2018
; Description: Filtering arrays
;===========================================
*/ 

// start program

var header = require('../header.js'); 
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.2")); 
console.log("\n");

// create an array and assign it to the variable x
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// functions
// getValue function uses for loop to get array values the uses if statement to compare values
function getValue(states, val) {
 for (var i = 0; i < states.length; i++) {
   if (states[i] === val)
     console.log(states[i]);
 }
}

// Output
// display the original unsorted array by looping through the array and logging the output
console.log("--DISPLAYING ORIGINAL UNSORTED ARRAY--");
for (var k = 0; k < states.length; k++)
console.log(states[k]);

// new line
console.log("");

// // display the sorted array using the filter() method
console.log("--DISPLAYING ORIGINAL SORTED ARRAY--");
sorted = states.sort(getValue(states))
console.log(sorted);

// new line and console logging the selected value of Iowa by passing in
// states array and selecting value of Iowa
console.log("");

console.log("--SELECTED VALUE--")
getValue(states, "Iowa");


// end program