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

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 2.3")); 
console.log("\n");

// function properties go here...
myName.leon = "Leon Maxwell";

// function 
function myName() {
    return myName.leon;
}

// output 
console.log('\n'); 
console.log("Hello " + myName() + "!");

// end program