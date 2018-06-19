<<<<<<< HEAD
/*
 Expected output:
 FirstName LastName
 Exercise 4.3
 Today's Date
 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus
 -- SELECTED VALUE --
 Motorcycle
 -- SELECTED VALUE --
 Bus
 */

// start program

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 15 June 2018
; Description: Filtering arrays
;===========================================
*/ 

// start program

var header = require('../header.js'); 
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.2")); 
console.log("\n");


// create an array of vehicles and assign it to the variable vehicles
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]; 

// function
function getValue(arr, val) {
 for (var i = 0; i < arr.length; i++){
   if (arr[i] === val)
    console.log(arr[i]);
 }
 }
 console.log("")

// Output will display the array and two selected values from the array
console.log("----- DISPLAYING ARRAY ITEMS -----");
for (var x = 0; x < vehicles.length; x++) {
 console.log(vehicles[x]);
}

// new line and console logging the selected value of motorcycle by passing in
// vehicles array and selecting value of motorcycle
console.log("");

console.log("--- SELECTED VALUE ---");
getValue(vehicles, "Motorcycle");

// new line and console logging the selected value of motorcycle by passing in
// vehicles array and selecting value of motorcycle
console.log("");

console.log("--- SELECTED VALUE ---")
getValue(vehicles, "Bus");

=======
/*
 Expected output:
 FirstName LastName
 Exercise 4.3
 Today's Date
 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus
 -- SELECTED VALUE --
 Motorcycle
 -- SELECTED VALUE --
 Bus
 */

// start program

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 15 June 2018
; Description: Filtering arrays
;===========================================
*/ 

// start program

var header = require('../header.js'); 
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.2")); 
console.log("\n");


// create an array of vehicles and assign it to the variable vehicles
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]; 

// function
function getValue(arr, val) {
 for (var i = 0; i < arr.length; i++){
   if (arr[i] === val)
    console.log(arr[i]);
 }
 }
 console.log("")

// Output will display the array and two selected values from the array
console.log("----- DISPLAYING ARRAY ITEMS -----");
for (var x = 0; x < vehicles.length; x++) {
 console.log(vehicles[x]);
}

// new line and console logging the selected value of motorcycle by passing in
// vehicles array and selecting value of motorcycle
console.log("");

console.log("--- SELECTED VALUE ---");
getValue(vehicles, "Motorcycle");

// new line and console logging the selected value of motorcycle by passing in
// vehicles array and selecting value of motorcycle
console.log("");

console.log("--- SELECTED VALUE ---")
getValue(vehicles, "Bus");

>>>>>>> a2ba7a03b565460081282edce0d49cc6a2ef9938
// end program