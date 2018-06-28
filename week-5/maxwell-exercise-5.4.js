/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 24 June 2018
; Description: Filtering/reducing complex data structures
;===========================================
*/
/*
Expected output:
 FirstName LastName
 Assignment 5.4
 Today's Date
 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven
 Rating: 10
 Composer: Mozart
 Rating: 9
 Composer: Bach
 Rating: 6
 Composer: Haydn
 Rating: 5
 Composer: Schubert
 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven
 Genre: Classical
 Composer: Mozart
 Genre: Classical
 Composer: Bach
 Genre: Classical
 Composer: Haydn
 Genre: Classical
 Composer: Schubert
 */

// Adding header information
var header = require('../header.js');

console.log(header.display("Leon", "Maxwell", "Exercise 5.4")); 
console.log("\n");

 // start program

 // make an array of famous composers

 var famousComposers = [
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
        rating: 8
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

// set the variables using the map fucntion to return a specific value from the array

// filter the array based on the composer's rating and last name


let composersByRating = famousComposers.map(function(composer) {
    return composer.rating;
});
let composersByRating1 = famousComposers.map(function(composer) {
    return composer.lastName;
});

// filter the array based on the composer's genre and last name

let composersByGenre = famousComposers.map(function(composer) {
    return composer.lastName;
});

let composersByGenre1 = famousComposers.map(function(composer) {
    return composer.genre;
});

// output the composer by rating
console.log("-- COMPOSER BY RATING --" + "\n");
composersByRating.forEach(function(composer) {
    console.log("Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName); 
    });



// log the composer by genre
console.log("-- COMPOSER BY GENRE --" + "\n");
composersByGenre.forEach(function(composer) {
    console.log("Composer: " + composer.lastName + "\n" + "Genre: " + composer.genre); 
    });



// end program


