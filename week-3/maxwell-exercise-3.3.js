// start program
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 08 June 2018
; Description: Control Statements assignment using the Switch function
;===========================================
*/ 


/*
    Expected output:
    FirstName LastName
    Exercise 3.3
    Today's Date
    // Expected output
    The enter key was pressed 
*/ 

var header = require('../header.js'); 
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 3.3")); 
console.log("\n");

// Multiway branch of if statements (replace with a switch statement)

//Define the variable that equates to the enter key
var eventKeyCode = 13;

//Switch statement that will output the enter key has been pressed

switch(eventKeyCode){
    case 13:
        console.log("The enter key was pressed")
        break;
    case 16:
        console.log("The shift key was pressed")
        break;
    case 32:
        console.log("The spacebar was pressed")
        break;
    case 8:
        console.log("The backspace / delete key was pressed")
        break;
    default:
        console.log("Unrecoginsed key press")
        break;        
}

// end program 