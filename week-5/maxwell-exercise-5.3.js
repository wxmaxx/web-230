/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 19 June 2018
; Description: Working with object collections (key collections)
;===========================================
*/
/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// Adding header information
var header = require('../header.js');

console.log(header.display("Leon", "Maxwell", "Exercise 5.3")); 
console.log("\n");

// start program

var composers = [
    {
        firstName: 'Ludwig van',
        lastName: 'Beethoven',
        genre: 'Classical',
        rating: 9
    },
    {
        firstName: 'Wolfgang Amadeus',
        lastName: 'Mozart',
        genre: 'Classical',
        rating: 10
    },
    {
        firstName: 'Johann Sebastian',
        lastName: 'Bach',
        genre: 'Classical',
        rating: 10
    },
    {
        firstName: 'Joseph',
        lastName: 'Haydn',
        genre: 'Classical',
        rating: 7
    },
    {
        firstName: 'Franz',
        lastName: 'Schubert',
        genre: 'Classical',
        rating: 5
    }
];

composers.forEach(function(composer){
    console.log(
        "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    );
})



// end program 


