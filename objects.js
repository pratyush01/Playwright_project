// In this file we are going to check what are the object
// Object is collection of properties
// properties means if we talk about person -> name, age, gender is properties

let person = {
    name : "Pratyush",
    age: 32,
    gender: "male"
}
console.log(person.name);
console.log("  ");

//array access of properties

console.log(person['gender']);
console.log("  ");

// we can change the properties at run time as well
person.name = "Pratyush mahalawat"
console.log(person.name);

//we can add properties as well at ru time
console.log("  ");
person.num = 8003065959;
console.log(person.num);
console.log("  ");
console.log(person);

//we can delete the properties at run time
console.log("  ");
delete person.num;
console.log(person);
console.log(" ");

// we can check if properties present or not with "in" keyword
console.log("num" in person);
console.log(" ");

//If we want to print all the values present in object we can use for loop
for(let key1 in person)
{
    console.log(person[key1]);
}
console.log(" ");

// trying to do this upper example with array push method
let arr1 = [];
for(let key in person){
    arr1.push(person[key]);
}
console.log(arr1);
console.log(" ");