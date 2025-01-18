////////////////// Comparison //////////////////
// Bigger >
// Less <
// Equal == (It won't check the Datatype)
// Equal === (It will check the Datatype)
// Not Equal != (It won't check the Datatype)
// Not Equal !== (It will check the Datatype)
// Bigger than or Equal >=
// Less than or Equal <=
// And &&
// Or ||
console.log(7>10)
console.log(7<10)
console.log(7==7)
console.log(7==='7')
console.log(7!=7)
console.log(7!=='7')
console.log(7>=8)
console.log(7<=3)


///////////////// Condition //////////////////
// IF ELSE
let age = 19;
let profession = 'Student';
if (age>=18 && profession=='Hacker'){
    console.log("You can access the site")
}
else{
    console.log("you are not suitable to access the site")
}

///////////////// Multi Level Condition //////////////////
let price = 2600;
if(price >= 5000){
    // 10% Discount
    let discount = price*0.1;
    console.log('Your Discount - ',discount)
}
else if(price >= 2500){
    // 5% Discount
    let discount = price*0.05;
    console.log('Your Discount - ',discount)
}
else{
    console.log('You are gorib')
}

///////////////// Condition Shortcut (Ternary Operator) //////////////////
let cgpa = 3.5;
cgpa > 3 ? console.log('You are good student') : console.log('You are bad student')

//////////// Logical NOT operator /////////////
// !true = false
// !false = true
let isPassed = true;
isPassed ? console.log('Tumi pash') : console.log('Tmi fail')