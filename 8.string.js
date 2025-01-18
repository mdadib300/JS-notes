// There is a relation between String and Array
const country = 'bangladesh';
console.log(country.length);

// Let's try to change a element of the string
console.log(country);
country[1] = 'B';
console.log(country);
// It is not changing because String is Immutable which refers to not changeable.

// Uppercase and Lowercase issue
const college = 'BARISHAL ENGINEERING COLLEGE';
console.log(college);
console.log(college.toLowerCase());

const affiliation = 'university of dhaka';
console.log(affiliation);
console.log(affiliation.toUpperCase());

// whitespace issue: trim() removes the whitespace from before and after the value of the variable
const department = ' EEE ';
console.log(department);
console.log(department.trim());
// it will not work for the whitespace which is in the middle of the value
const headOfDept = 'Sabuj Ahmed';
console.log(headOfDept);
console.log(headOfDept.trim());