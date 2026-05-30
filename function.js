// we will discuss about function in this file

function add(a,b)
{
    return a+b;
}
console.log(add(2,3));

console.log("  ");

function sub(c,d)
{
    return d-c;
}
console.log(sub(20,80));

console.log("   ");

// anonymous function which don't have name

let sum1 = function(e,f)
{
    return e+f;
}
console.log(sum1(2,3));

console.log("   ");

// fat pipe also can be used as function

let sum2 = (g,h) => g+h
console.log(sum2(3,5));

console.log("--------------------------------------------Var, let, and const---------------------------------");

console.log("   ");
console.log("   ");
console.log("   ");

//var -> global/functional(in function)
//let -> global level/ block level {}
//const -> 

var greet = "evening"
if(1 == 1)
{
    var greet = "afternoon" // this is describe in iff block so this will work because this is not in function, it will treat as global
}

function add1(a,b)
{
    var greet = "morning !"
    return a+b;
}
console.log(add1(1,1));  // output -> 2
//console.log(greet);  // output error because we are accessing outside of function
