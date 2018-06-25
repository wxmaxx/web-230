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


var comnposersByRating = famousComposers.map(function(composer) {
    const result = composer.filter(x, x);

});

var composersByGenre = famousComposers.map(function(composer) {

});

console.log("-- COMPOSER BY RATING --" + "\n");
console.log(result);


console.log("-- COMPOSER BY GENRE --");



// end program
// famousComposers.forEach(function(composer){
//     console.log(
//         "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
//     );
// })



// var comnposersByRating = obj.map(function(composer) {
//     for(const [key, value] of Object.entries(obj)); {
//         console.log('${key} ${value}');
//     };




// // output the composer by rating
// console.log("-- COMPOSER BY RATING --");
// console.log(Object.entries(obj));
// // console.log("Last Name: " + composer.lastName + "\n" + ", Rating: " + composer.rating + "\n");

// // // console.log(famousComposers[2]);
// // console.log("Last Name: " + composer.lastName + "\n" + ", Rating: " + composer.rating + "\n");
// // console.log("");


// // output the composer by genre

// // console.log("-- COMPOSER BY GENRE --");
// // console.log("");
// // console.log(composersByGenre);



// // end program

// // information for looping throught he code follows
// // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// // const obj = { foo: 'bar', baz: 42 };
// // console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// // // array like object
// // const obj = { 0: 'a', 1: 'b', 2: 'c' };
// // console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// // // array like object with random key ordering
// // const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// // console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// // // getFoo is property which isn't enumerable
// // const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
// // myObj.foo = 'bar';
// // console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// // // non-object argument will be coerced to an object
// // console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// // // returns an empty array for any primitive type, since primitives have no own properties
// // console.log(Object.entries(100)); // [ ]

// // // iterate through key-value gracefully
// // const obj = { a: 5, b: 7, c: 9 };
// // for (const [key, value] of Object.entries(obj)) {
// //   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// // }

// // // Or, using array extras
// // Object.entries(obj).forEach(([key, value]) => {
// // console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// // });



