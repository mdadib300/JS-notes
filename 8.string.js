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

// Slice of a string
const kothinCourse = 'MATHEMATICS';
const courseShortName = kothinCourse.slice(0,4); // slice(a,b) a=ei index theke suru, b=ei index er ager index e sesh
console.log(courseShortName);

// Split and join
const names = 'Adib, Sdib, Ddib, Fdib, Jdib';
console.log(names);
const namesArray = names.split(', ') // splitted before and after ',';
console.log(namesArray); // created an array with the splitted elements
console.log(namesArray.join('-')); // joined the array elements with '-'

// Concatination
const firstName = 'Adib';
const lastName = 'Chowdhury';
const fullName = firstName + ' ' + lastName;
console.log(fullName);
// includes?
console.log(firstName.includes('x'));

// Reverse a string 
let phyInstructor = 'Dr. Md. Tarek Hossain';
let reversePhyInstructor = phyInstructor.split('').reverse().join('');
console.log(reversePhyInstructor);