// Declare an array
const cars = ['ashok leyland', 'volvo', 'tata'];

// length of an array
const numbers = [1,2,3,4,5,6];
console.log(numbers.length)

// Insert items in an array
const clothes = [];
clothes[0] = 'shirt';
clothes[1] = 'pant';
clothes[2] = 't-shirt';
// or 
clothes.push('polo')
console.log(clothes)

// Array is Mutable so we can Change the items of an array
clothes[2] = 'underwear';
console.log(clothes)

// remove last element from an array
const friends = ['ratul', 'tahmid', 'saidul', 'nehal', 'shihab', 'adib'];
console.log(friends)
friends.pop()
console.log(friends)

// Finding value from an array using index number
const students = ['adib', 'mofis', 'modon', 'abul'];
const modon = students[2];

// Finding the index number from array's value
const gfs = ['maira', 'kaira', 'charia', 'dalia'];
console.log(gfs.indexOf('charia'))

// Check the element is present in the array or not
const classmates = ['shawon', 'shahed', 'tahalil', 'adib'];
console.log(classmates.includes('munir'))

// check it is array or not
const eitaArray = [1,2,3,4,5];
const eitaArrayNa = 1;
console.log(Array.isArray(eitaArray))
console.log(Array.isArray(eitaArrayNa))

