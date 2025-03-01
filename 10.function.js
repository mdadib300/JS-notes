// A basic function and its use
function sum(a,b){
    return a+b;
}

const n1 = 10;
const n2 = 12;
console.log(sum(n1,n2));

// conditional return
function isEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(125));