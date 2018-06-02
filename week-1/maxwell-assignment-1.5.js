/*
====================================================
Title: Assignment 1.5
Author: Professor Krasso
Date: 27 May 2018
Modified By: Leon Maxwell
Description: Types, values, and variables 1.5.
====================================================
*/

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Leon";
var myLastName = "Maxwell";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n");

// start of program - your code goes below this line

// create empty variables that will be called in for each employee
var firstName
var lastName
var middleName
var address
var payRate
var hireDate

//create record for Fred No Doe
//created variables

firstName = "Fred";
lastName = "Doe";
middleName = "No";
address = "101 B Street Omaha, NE 68100";
payRate = parseFloat(10.74);
hireDate = new Date(2014, 2, 12).toLocaleString();

console.log('First Name:' + ' ' + firstName);
console.log('Last Name:' + ' ' + lastName);
console.log('Middle Name:' + ' ' + middleName);
console.log('Address:' + ' ' + address);
console.log('Pay Rate:' + ' ' + '\$' + payRate);
console.log('Hire Date:' + ' ' + hireDate + '\n');

//create record for Joe Bo Done
//created variables

firstName = "Joe";
lastName = "Bo";
middleName = "Done";
address = "102 B Street Omaha, NE 68100";
payRate = parseFloat(15.75);
hireDate = new Date(2010, 4, 7);

console.log('First Name:' + ' ' + firstName);
console.log('Last Name:' + ' ' + lastName);
console.log('Middle Name:' + ' ' + middleName);
console.log('Address:' + ' ' + address);
console.log('Pay Rate:' + ' ' + '\$' + payRate);
console.log('Hire Date:' + ' ' + hireDate + '\n');


//create record for Jane Ho Doe
//created variables

firstName = "Jane";
lastName = "Ho";
middleName = "Doe";
address = "103 B Street Omaha, NE 68100";
payRate = parseFloat(22.01);
hireDate = new Date(2017, 11, 25);

console.log('First Name:' + ' ' + firstName);
console.log('Last Name:' + ' ' + lastName);
console.log('Middle Name:' + ' ' + middleName);
console.log('Address:' + ' ' + address);
console.log('Pay Rate:' + ' ' + '\$' + payRate);
console.log('Hire Date:' + ' ' + hireDate + '\n');


//create record for Jake Bo Noe
//created variables

firstName = "Jake";
lastName = "Bo";
middleName = "Noe";
address = "101 A Street Omaha, NE 68100";
payRate = parseFloat(8.75);
hireDate = new Date(2013, 05, 24);

console.log('First Name:' + ' ' + firstName);
console.log('Last Name:' + ' ' + lastName);
console.log('Middle Name:' + ' ' + middleName);
console.log('Address:' + ' ' + address);
console.log('Pay Rate:' + ' ' + '\$' + payRate);
console.log('Hire Date:' + ' ' + hireDate + '\n');

//create record for Tippie Yo Canoe
//created variables

firstName = "Tippie";
lastName = "Yo";
middleName = "Canoe";
address = "107 C Street Omaha, NE 68100";
payRate = parseFloat(16.01);
hireDate = new Date(2018, 0, 17);

console.log('First Name:' + ' ' + firstName);
console.log('Last Name:' + ' ' + lastName);
console.log('Middle Name:' + ' ' + middleName);
console.log('Address:' + ' ' + address);
console.log('Pay Rate:' + ' ' + '\$' + payRate);
console.log('Hire Date:' + ' ' + hireDate + '\n');

// end of program 
