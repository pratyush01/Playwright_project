
// In this we are going to learn about array
console.log("       ");
console.log("-----------------------------------------------Array------------------------------------");

// Array is an collection of elements
// array will behave as a container as well to store values

let marks = [6, 3, 8, 10, 33, 55];
console.log(marks[4]);  // 33
marks[3] = 15;
console.log(marks);
console.log(".     ");

console.log(marks.length);

// Push is used to append new element in array

marks.push(87);
console.log(marks);
console.log(marks.length);

// pop is used to remove the element from array
console.log("        ");
marks.pop();
console.log(marks);
console.log(marks.length);


// unshift is used to add element in the beginning of array

console.log("       ");

marks.unshift(89);
console.log(marks);
console.log(marks.length);


// Index of element in array and means if we gave value then we can check which index

console.log(marks.indexOf(8));

// how to check if number is present in array or not

console.log("   ");
console.log(marks.includes(76));
console.log("   ");
console.log(marks.includes(8));

// we can slice the array by using method slice
//(2,5) means this will count till 4th element means 5-1 -> 4

console.log("    ");

console.log(marks.slice(2,5));  // 3,8,15 because [89,6,3,8,15,33,55]

// for loop to iterate this array

console.log("   ");

var sum = 0;
var sum1 = 0;
for(let i=0; i<marks.length; i++)
{
 console.log(marks[i]);
 sum = sum + marks[i];
 sum1 = sum1 + 1;
}
console.log(sum);
console.log("    ");
console.log(sum1);

// reduce filter map used to perform operation on elements of your array

console.log("   ");

marks.reduce((sum, mark)=> sum+mark,0)

console.log("   ");
console.log("Find Even numbers");
console.log("   ");
var scores = [12,13,14,16];
var scores1 = [];
for(let i=0;i<scores.length; i++)
{
    if(scores[i]% 2 == 0)
    {
       scores1.push(scores[i]);
    }
}
console.log(scores1);

console.log("   ");

console.log("Find all even number and multiply each value by 3");
console.log("   ");

var scores2 = [];
for(let i=0; i<scores.length; i++)
{
    if(scores[i] % 2 == 0)
    {
        //let scores3 = scores[i]*3;
        scores2.push(scores[i]*3);
    }
}
console.log(scores2);

console.log("   ");
console.log("Find all even number and multiplyeach value with 3 and sum array");
console.log("  ");

var scores4 = [];
var scores3 = 0;
for(let i = 0; i<scores.length; i++)
{
    if(scores[i] % 2 == 0)
    {
        scores4.push(scores[i]*3);
        //scores3 = scores3 + scores4[i];
        scores3 = scores3 + (scores[i]*3);
    }
}
console.log(scores4);
console.log("  ");
console.log(scores3);


// Sorting on Array
// sorting of string is easy by using sort method
// But if we want to sort number then its not the same method we used.

console.log("   ");
let fruits = ["banana", "mango", "anar", "crate"]
fruits.sort();
console.log(fruits);

console.log("  ");

var scores5 = [12,13,19,16,14]
console.log(scores5.sort());

console.log("  ");

var scores6 = [12, 009, 13, 19, 16, 14] // this breaks as we got number 009
console.log(scores6.sort());
console.log("  ");
console.log(scores6.sort((a,b)=> a - b));

console.log("------------------------------------------Bubble Sorting -------------------------------------");

var scores7 = [12, 009, 19, 16, 14]
for(let i=0; i<scores7.length; i++)
{
    for(let j = 0; j<scores7.length - 1 - i; j++)
    {
        if(scores7[j] > scores7[j + 1])
        {
            let temp = scores7[j];
            scores7[j] = scores7[ j+ 1 ];
            scores7[j + 1] = temp;
        }
    }
}
console.log(scores7);