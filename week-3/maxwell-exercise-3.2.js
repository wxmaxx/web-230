/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 08 June 2018
; Description: Patteren matching assignment
;===========================================
*/ 


// start program

/*
    Expected output:
    FirstName LastName
    Exercise 3.2
    Today's Date
    // output from the match() function 
    false
    true 
    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 
var header = require('../header.js'); 
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 3.2")); 
console.log("\n");


// defining variables first
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

// functions

//function compares 2 arguments to see if they match or not; true if match, false if no match
function match(arg1, arg2) {
  if (arg1 === arg2)
    return true
  else
    return false
} 

//function tests if arg1 and arg2 match and logs result
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

//function tests if arg1 and arg2 do not match and logs result
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}


// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
//the first if statement checks the first two variables
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

//the second if statement checks the third and fourth variables
if (match(testVar3, testVar4)) {
    logMatch(testVar3, testVar4);
} else {
    logMismatch(testVar3, testVar4);
}

//the third if statement checks the fifth and sixth variables
if (match(testVar5, testVar6)) {
    logMatch(testVar5, testVar6);
} else {
    logMismatch(testVar5, testVar6);
}



// end program 