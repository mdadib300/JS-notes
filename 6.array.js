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

// Array looping
const friendss = ['Adib', 'Elon', 'Mark', 'Bill'];
// using for-of loop
for(friend of friendss){
    console.log(friend);
}

// using for loop
for(i=0;i<friends.length;i++){
    console.log(friends[i]);
}

// reverse an array with 'reverse()'
const numberss = [1,2,3,4,5];
const numbers_rev = numberss.reverse();
console.log(numbers_rev);

// reverse an array with for-of loop
const nums = [4,5,6,7,8];
const nums_rev = [];
for(num of nums){
    nums_rev.unshift(num);
}
console.log(nums_rev);

// reverse an array with for loop
const ns = [3,4,5];
const ns_rev = [];
for(i=0; i<ns.length; i++){
    ns_rev.unshift(ns[i])
}
console.log(ns_rev);

// Sort (It has some issues, so it doesn't work properly)
const goribs = ['Akib', 'sakib', 'Nakib', 'Zhakib', 'akibbb'];
console.log(goribs.sort()); // it works based on the ASCII codes


