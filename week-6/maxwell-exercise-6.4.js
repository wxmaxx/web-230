/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 28 June 2018
; Description: Nested object literals
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 6.4")); 
console.log("\n");

var ticket = {
    // ticket properties
    id: 20180628001,
    name: "Ticket 001",
    dateCreated: "6/28/2018",
    priority: 1,
    personId: 25,

        person: {
            // person properties
            id: 25,
            firstName: "Leon",
            lastName: "Maxwell",
            jobTitle: "Head Messerupper"
        }
};

console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + "\n" + " and assigned to employee " 
            + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");

// end program