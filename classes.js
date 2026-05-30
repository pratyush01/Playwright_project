//In this file we know about the classes
class Person
{
    age = 25
}

//how to create object for class
let person = new Person()
console.log(person.age);
console.log(" ");

//getter and setter method
class Person1
{
    age1 = 32;
    get location()
    {
        return "canada";
    }
}
let person1 = new Person1();
console.log(person1.location);

//constructor is method which execute by default when you create object of the class
