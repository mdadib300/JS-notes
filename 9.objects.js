// An object is like a data table of anything. Suppose you've bought a desktop, now its specifications will be added in an object.
const desktop = {
    monitor: 'Starex',
    processor: 'Core i 3',
    ram: 8,
    ssd: true
};
console.log(desktop);

// Here, "monitor" is the key and "'starex'" is the property
// Find an object property
console.log(desktop.processor); //or,
console.log(desktop['processor']);

// Add object key+property
desktop.gen = '3rd';
console.log(desktop);

// Delete an object key+property
delete desktop.ssd;
console.log(desktop);

// Nested object
const me = {
    name: 'Adib',
    age: 20,
    department: 'EEE',
    coursesCode: {
        theory: 1101,
        sessional: 1102
    },
    deptHead: 'Sabuj ahmed'
};
console.log(me);
console.log(me.coursesCode.sessional);

// loop an object (for-in loop)
for(specs in me){
    console.log(specs);
    console.log(me[specs]);
    console.log(specs, "-", me[specs]);
}

