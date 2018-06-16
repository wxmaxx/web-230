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

 /*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 15 June 2018
; Description: Patteren matching assignment
;===========================================
*/ 

// start program

var header = require('../header.js');
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.3")); 
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
 
// Output will display the array along with two selected items
console.log("----- DISPLAYING ARRAY ITEMS -----");
for (var x = 0; x < vehicles.length; x++) {
 console.log(vehicles[x]);
}

// new line creates a new line and will display the result motorcycle
console.log("");

console.log("--- SELECTED VALUE ---");
getValue(vehicles, "Motorcycle");

// new line creates a new line and will display the result bus
console.log("");

console.log("--- SELECTED VALUE ---")
getValue(vehicles, "Bus");

// end program