/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 28 June 2018
; Description: Exception handing using try/catch/finally
;===========================================
*/ 
/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 6.2")); 
console.log("\n");

try {
    // declare two variables to compare
    var x = 11;
    var y = 10;

    // use an if/else statement to compare whether x is less than y
    // if x < y, log Excellent; else log x not < y will throw error to catch block

    if (x < y) {
        console.log("Excellent");
    } else
    throw "x is not less than y";

} catch (err) {
    console.log("Catch clause: " + err);

} finally {
    console.log("Finally clause reached: end of program")

}

// end program