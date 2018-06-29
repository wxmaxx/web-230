/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 28 June 2018
; Description: Object literals
;===========================================
*/ 
/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

 // start program

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 6.3")); 
console.log("\n");

var ticket = {
    id: "ticket id",
    name: "ticket name",
    requester: "your name"
};

console.log("id: " + "<" + ticket.id + ">" + ", " +
"name: " + "<" + ticket.name + ">" + ", " +
"requester: " + "<" + ticket.requester + ">");

// end program