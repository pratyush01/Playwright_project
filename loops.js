// This file is all about loops we use in Javascript

const flag = true;

// First we check with If condition and this will check for condition and if its true then will go inside

if(!flag){
    console.log("inside if condition");
}
else{
    console.log("inside else condition");
}

// While loop -> if the expression is true then loop will un n number of times
// why we use while loop -> if we know the condition then we can use while loop

// while(true)
// {
//     console.log("inside while loop");
// }

let i = 0
while(i<10)
{
    i++
    console.log(i);
}

// for loop -> 
// use for loop when you know that how many time we run this loop and this will run for n number of times. 
// If we want to repeat loop then we can use for loop but if we want to repeat loop based on expresison/condition then
// we use while loop.
// while only look for expression as condition

console.log("---------------------------------------------------------------------------------------------");

for(let k=0; k<=10;k++)
{
console.log(k);
}

// Example
console.log("----------------------EXAMPLE----------------------------------------------------------------");

console.log("find multiple of 2 and 5");

for(let m=1;m<=100;m++)
{
    if(m % 2 == 0 && m % 5 == 0)
    {
        console.log(m);
    }
}

console.log("                                                 ");
console.log("                              ");

console.log("Find Multiple of 2 and 3");

console.log(" ");

for(let n=1; n<=100; n++)
{
    if(n % 2 == 0 && n % 3 == 0)
    {
        console.log(n);
    }
}

// = is used to assign value
// == is used to compare the value

