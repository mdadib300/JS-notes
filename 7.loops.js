// basic for-of loop structure
const pluralNumbers = [1,2,3,4,5,6];
console.log(pluralNumbers)
for(const singularNumber of pluralNumbers){
    console.log(singularNumber)
}

// While loop
let i = 0;
while(i<10){
    console.log('Hello world', i)
    i++
}

// Problem 1 - show number 1 to 20 using JavaScript While Loop
let number = 1;
while(number<21){
    console.log(number)
    number++
}

// Problem 2 - Calculate the summation of number 1 to 10
let n = 1;
let sum = 0;
while (n <= 10){
    console.log(n)
    sum = sum+n;
    console.log(sum)
    n++
}

// Problem 3 - show the odd numbers between 1 to 10
let nu = 1;
while(nu <10){
    console.log(nu)
    nu = nu +2;
}

// For loop
let j;
for(j=1;j<=10;j++){
    console.log("Print koro somossha nai", j);
}
