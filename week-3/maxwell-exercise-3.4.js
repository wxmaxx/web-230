// start program

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 09 June 2018
; Description: Loops assignment, using both a for
;and while loop
;===========================================
*/ 

/*
    Expected output:
    FirstName LastName
    Assignment 3.4
    Today's Date
    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!
    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!
*/ 
var header = require('../header.js'); 
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 3.4")); 
console.log("\n");

//Declaring variables
// testVar1 is going to always be 6
// testVar2 will is assigned to the randomNumber function
var testVar1 = 6;
var testVar2 = randomNumber();

//Functions:
// Some reused functions from exercise-3.2.js
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

//function creates a random number and assigned to testVar2
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

// Output from the match() function, will provide false and true to show function works
console.log(match("A", "B"));
console.log(match(2, 2));
console.log("End of test, code follows:" + "\n");

// Conditional "if...else" statements. Include checks for all six (6) test variables 
//the first if statement checks the first two variables
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

console.log("\n" + "Displaying for loop");
// for loop
for (var i = testVar2; i < 10; i++){
    var testVar2 = randomNumber();
    if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
}    else {
    logMismatch(testVar1, testVar2);
}
} 
console.log(i);


// while loop
console.log("\n-- Displaying while loop --"); 
var j = testVar2;
while(j < 10){
    var testVar2 = randomNumber();
    if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
}    else {
    logMismatch(testVar1, testVar2);
}
++j;
}
console.log(j)

// end program 