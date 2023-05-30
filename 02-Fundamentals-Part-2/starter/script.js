"use strict";
// ACTIVATING STRICT MODE
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can dfive! D");

const interface = "Audio";
const private = 345543;
*/
// FUNCTION

function logger() {
  console.log("Ny name is Kadui");
}

//Calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(12, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(12, 15);
console.log(appleOrangeJuice);
