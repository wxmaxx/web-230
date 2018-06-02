/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 01 June 2018
; Description: Displays a formatted header
;===========================================
*/ 
// Calls in the header.js file located in the root directory
var header = require('../header.js');

console.log("\nTesting the header.js file's output...");

/*
The following function (header) calls in the header.js file
;It passes three arguments (leon(f), maxwell(l), exercise 2.2(a))
;to the program, which returns the output of the variable (message)
*/

console.log(header.display("Leon", "Maxwell", "Exercise 2.2")); 
console.log("\n");