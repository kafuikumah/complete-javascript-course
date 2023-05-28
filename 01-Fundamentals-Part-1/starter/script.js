// VALUES AND VARIABLES
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Mathilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

//Variable Name Conventions
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

// LESSON 2 DATA TYPES

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(true);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 543);
// console.log(typeof "Kafui");
// console.log(typeof Kafui);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

// LET AND CONST

// 1 - LET
/*
let age = 23;
age = 24; //re-assigining or mutated value 24 to variable age

// 2 - CONST
// const birthYear = 1999;
// birthYear = 2002;

var job = "Programmer";
job = "Teacher";

lastName = "Schmeiterling";
console.log(lastName);
*/

// JAVASCRTIPT OPERATORS

//Arithmetic Operators
const now = 2037;
const ageJoan = now - 1991;
const ageSarah = now - 1997;
console.log(ageJoan, ageSarah);

console.log(ageJoan * 2, ageJoan / 10, 2 ** 3);

// CONCATENATION
const firstName = "LeBron";
const lastName = "James";

console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATOR
let x = 10 + 5;
x += 10; // x = x plus 10 = 25
x *= 4; // x = x multiplied by 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--;
// x /= 10;
console.log(x);

// COMPARISONS

console.log(ageJoan > ageSarah); // <, >, <=. >=
console.log(ageJoan >= ageSarah);
console.log(ageJoan >= 81);

const isFullAge = ageJoan >= 81;
console.log(now - 1991 > now - 2018);
