/*

 Expected output:
 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple

 Orange

 Banana

 Mango

 Pear

 */

 /*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 15 June 2018
; Description: Patteren matching assignment
;===========================================
*/ 

// start program
var header = require('../header.js');
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.2")); 
console.log("\n");

// Declare an array of fruits and assign it to the variable fruits
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// getFruit function calls in the fruits array, loops through the list using a for loop, logs the output

function getFruit(arr) {
 for (var k = 0; k < arr.length; k++) {
  console.log(arr[k]);
 }
}

// Output from the getFruit() function
getFruit(fruits);

// end program