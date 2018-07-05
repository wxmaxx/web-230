/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 4 Jul 2018
; Description: constructor functions
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program
var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 7.2")); 
console.log("\n");

// create a constructor object using employee object as a function with four arguments
function Employee(id, firstName, lastName, title){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

// create an employee variable calling in the Employee objects with five instances
var employee = [
    new Employee("1.", "Thomas", "Edison", "Software Engineer"),
    new Employee("2.", "Benjamin", "Franklin", "Programmer"),
    new Employee("3.", "Nikola", "Tesla", "Project Manager"),
    new Employee("4.", "Charles", "Babbage", "Product Manager"),
    new Employee("5.", "Alexander", "Bell", "Business Analyst"),
];


// create a forEach loop to iterate through the employee variable, accessing .notation to the log

employee.forEach(function(employee) {
    console.log(employee.id, employee.firstName, employee.lastName, employee.title);
  });

// end program