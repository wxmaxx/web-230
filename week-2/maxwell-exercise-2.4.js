/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 02 June 2018
; Description: Displays a formatted header
;===========================================
*/ 

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 
// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 2.4")); 
console.log("\n");


// function(s) go here...

//  function properties for fullName
fullName.first = "Leon";
fullName.last = "Maxwell";

function fullName(first, last) {
   return fullName.first + " " + fullName.last;    
}

// function properties for dateWriter
// dateWriter.year = 2018;
// dateWriter.month = "June";
// dateWriter.day = 02;

function dateWriter(year, month, day) {
    
    var date1 = new Date().toDateString();
    ; return date1;
    /*
    ;Output of above code is: Today's date is Sat Jun 02 2018
    ;close but doesn't pass in values and cannot get rid of Sat
    */
    // new Date().toLocaleDateString();
    // return Date();
    // ouput of above code is Today's date is 
    // Sat Jun 02 2018 05:09:24 GMT-0500 (Central Daylight Time)
    // cannot get if formated that way I want
    // return dateWriter.day + " " + dateWriter.month + ", " + dateWriter.year;
    // above code doesn't return "fully qualified" date object
   
}
// formatNumber.number = 65;
// formatNumber.fixed = 64.8;

function formatNumber() {
    var n = 64.5;
    n.toFixed(0);
    return n;

}

//function properties for convertToInt
convertToInt.num = "49"

function convertToInt(num) {
    var num = "49";
    parseInt(num);
    return  num;

}
// Function properties for the convertToFloat function

convertToFloat.num = "30,000.01"

function convertToFloat(num) {
    var num = "30,000.01";
    parseFloat(num);
    return num;
}

// output 
console.log('\n');
console.log("Hello, my name is " + fullName() + "!");
console.log('\n') 
console.log("Today\'s date is " + dateWriter() + " " + "and the current temperature is " + formatNumber() + " degrees.");
console.log('\n');
console.log( "I am " + convertToInt() + " years old and my savings account goal is " + convertToFloat() + " dollars.");



// end program 