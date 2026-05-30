// we will discuss about string and its method

let day = "tuesday ";

console.log(day.length); // output 8

console.log("  ");

//slice method
console.log(day.slice(0,4)); // output tues

console.log("   ");

//index of letter

console.log(day[3]); // output "s" because index also start with 0

console.log("   ");

//split string with tue and day
 
let a = day.split("s");
console.log(a); // tue and day

console.log("   ");

// split will be stored in array so we can check by index as well

console.log(a[1]); // "day " it will give space as well

console.log("   ");

// If we want to trim the space

console.log(a[1].length); // 4 -> 3 letter and 1 space

console.log("  ");

console.log(a[1].trim().length); // 3 -> 3 letter only and remember trim is method so use bracket

console.log("  ");

// subtract between date

let date = "23"
let nextdate = "27"

let diff = parseInt(nextdate) - parseInt(date);
console.log(diff);

console.log("   ");

//concatenate 2 string

let day1 = "sunday";
let newquote = day1 + " is funday and gunday";

console.log(newquote);

console.log("  ");

// index of -> this is same as array

let val = newquote.indexOf("day");
console.log(val);

console.log("   ");

// how many time day occur in our string





console.log("-----------------------------------------------Example sort name-------------------------------------");

//

let name = "Pratyush";
let b = [];
for(let i=0; i<name.length ; i++)
{
   //console.log(name[i]);
   b.push(name[i]);
}
console.log(b);

console.log("  ");

let rev = b.reverse();
console.log(rev);

console.log("   ");

let namerev = rev.join('');
console.log(namerev);
console.log(name);
