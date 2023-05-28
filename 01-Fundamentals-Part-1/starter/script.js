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
/*
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
*/

// OPERATOR PRECEDENCE
/*
const now = 2037;
const ageJoan = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 25 - 10 - 5 = 10
console.log(x, y);

const averageAge = (ageJoan + ageSarah) / 2;
console.log(ageJoan, ageSarah, averageAge);
*/

// CODING CHALLENGE 1
// DATA SET 1
const massJohn = 92;
const massMark = 78;

const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI is " + " " + bmiMark, "John's BMI is " + " " + bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher?" + " " + "Ans:" + markHigherBMI);

// DATA SET 2
const massMark2 = 95;
const heightMark2 = 1.88;

const massJohn2 = 85;
const heightJohn2 = 1.76;

let bmiMark2 = massMark2 / heightMark2 ** 2;
let bmiJohn2 = massJohn2 / heightJohn2 ** 2;

console.log(bmiMark2, bmiJohn2);
