// Number and String in JS Addition
let number1 = 10;
let number2 = '20';
let addition = number1+number2;
console.log(addition)
// This problem won't happen in Subtraction, Multiplication and Division

// How to resolve this?
// Use "parseInt()"
// "parseInt() converts a string into an integer"
let number3 = parseInt(number2);
let addition2 = number1+number3;
console.log(addition2)

// What if we parseInt a data which cannot be converted to a number
let age = 'Twenty One';
let ageNumber = parseInt(age);
console.log(ageNumber)
// The result will be NaN (Not a Number)

// Can parseInt convert '44.5' to 44.5?
// No, to convert decimal strings to number, we've to use "parseFloat()"
let temperature = '32.5';
let temperatureNumber = parseInt(temperature);
let temperatureNumberDecimal = parseFloat(temperature);
console.log(temperatureNumber, temperatureNumberDecimal)
// QUESTION: Why the answer of parseInt is 32? why not any Error?

// Errors related to adding decimal numbers
let decimal1 = 0.1;
let decimal2 = 0.2;
let decimalAddition = decimal1+decimal2;
console.log(decimalAddition)
// How to fix it? 
// Just use "toFixed('number of digits after the decimal point')"
let decimalAddition2 = decimalAddition.toFixed(1);
console.log(decimalAddition2)
// But the answer will be in String, so you've to use parseFloat() to fix it
console.log(parseFloat(decimalAddition2))

// Infinity Error
let inf = 100/0;
let negInf = -100/0;
console.log(inf, negInf)

// How to check a Number 
console.log(isNaN(22))
console.log(isNaN('22'))
console.log(isNaN('Twenty Two'))