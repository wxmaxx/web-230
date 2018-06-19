/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Leon Maxwell>
; Modified date: 19 June 2018
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

// famousComposers.forEach(function(composer){
//     console.log(
//         "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
//     );
// })



var comnposersByRating = famousComposers.map(function(composer) {
    famousComposers.forEach(function(composer){
        console.log(
            "Last Name: " + composer.lastName + "\n" + ", Rating: " + composer.rating + "\n"
        );
    })
    });

// var composersByGenre = famousComposers.map(function(composer) {

// });

// output the composer by rating
console.log("-- COMPOSER BY RATING --");
console.log("");
// console.log(famousComposers[2]);
console.log("Last Name: " + composer.lastName + "\n" + ", Rating: " + composer.rating + "\n");
console.log("");


// output the composer by genre
console.log("-- COMPOSER BY GENRE --");
console.log("");
console.log(composersByGenre);



// end program