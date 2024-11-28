console.log("Welcome, Traveler!"); 

let name    = "John"
let surname = "Smith"
let fullName = name + ' ' + surname

console.log(name); 
console.log(surname)
console.log(fullName)

const pi = 3.14
// pi = 10
// Will throw an error. Const cant not be changed.
console.log(pi) 

console.log(23 + 97)
console.log((4+6+9)/77) 

// javascript.info Variables article

let admin = name
let name1 = "John"
console.log(admin)

let homePlanet = "Earth"
let currentUser = "Current User"

//  w3schools.com JS Arithmetic

// let x = 100 + 50; 
// console.log(x);

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

// MDN JS Math

// Integers have no decimal point
// floating point numbers have a decimal point

const myInt = 5;
const myFloat = 6.667; 
const age = '3'
const negative = -3

console.log(typeof myFloat);
console.log(typeof age);

const lotsOfDec = 1.7665849586757
console.log(lotsOfDec)
const twoDecPla = lotsOfDec.toFixed(2)
console.log(twoDecPla);

let myNumber = "74"; 
console.log(myNumber);
console.log(typeof myNumber);
myNumber = Number(myNumber) + 3
console.log(myNumber);

// DATA TYPES AND CONDITIONALS

const string = "The revolution will not be televised."
console.log(string);
const badString = string
console.log(badString);

// Template Literal

const person = 'Chris'
const greeting = `Hello, ${person}!]`
console.log(greeting)


// W3 Template Methods

let text = 'ABCDEF';
let length = text.length;
// gets the length of the string characters
console.log(length);
// extracts specific character in the string
console.log(text.charAt(0));
// UTF-16 code for a specific character in the string
console.log(text.charCodeAt(0));
// extracts specific character in the string (allowing for negative integers)
console.log(text.at(0));

// string Parts

// slices out portion of the string (excluding end index)
console.log(text.slice(0,3))
// negative parameters starts from the end of the string
// Similar to slice, but the second parameter refers to length of slice
console.log(text.substr(0,3));
// converts btwn upper and lower cases
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// String Concat

let text2 = 'GHFIJKL';
let text3 = text.concat(text2);
console.log(text3);
// pads beginning ro end of string with character
console.log(text3.padStart(15,"Z"));
// repeat...
console.log(text3.repeat(3));
// replace
console.log(text3.replace('ABC','123'));

// MDN String Methods Lesson

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


