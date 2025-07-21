// ! javascript functions practice
// All functions are first class objects in JavaScript

// How many functions we have in javascript?
// 1) Named function (for this only the function hosting is possible in the global scope)
// 2) Anonymous function (a function that does not have a name and we can not use it directlly)
// 3) function with expression (we can use the Anynomous function as a value of a variable that is called function expression)
// 4) Immediately Invoked Function Expression (IIFE) (a function that is executed immediately after it is defined) 
// 5) Arrow function (a shorter syntax for writing functions, introduced in ES6)
// 6) Function constructor (a way to create functions dynamically, not commonly used) (Most used to create the objects and initialize its properties)
// 7) Higher Order Function (a function that takes another function as an argument or returns a function as its result)
// 8) Callback function (a function that is passed as an argument to another function and is executed after some operation)
// 9) Nested Function (a function defined inside another function, can access variables from the outer function's scope) (In this only closure will get created)
// 10) Generator Function (a special type of function that can pause and resume its execution, introduced in ES6)

// Also Will Be Covering the few Important Topics like :
// Closures
// Lexical Scope (the visibility of variables in nested functions)
// Scope Chaining (How it will look for the variables if those are not defined in the current scope)
// Function Hoisting (the behavior of moving entire function  to the top of their scope during compilation)
// Call , Apply and Bind (methods to change the context of 'this' in functions)
// this keyword value in the all the functions 
// Function Currying (a technique to transform a function with multiple arguments into a series of functions that take one argument at a time)

// ! first Named Function 
// Defination : A function which will have the name is known as the named function 

displayName(); // Function Hosting is possible in the global scope hence abl;e to access the function before its declaration only in the global scope

function displayName(){
    console.log("Manoj Katkar");
}


// ! Anonymous Function
// function(){
//     console.log("This is an anonymous function");
// }


// ! Function With Expression
const displayAge = function(){
    console.log("I am 25 years old");
}

displayAge();

// ! Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("This is an Immediately Invoked Function Expression ");
})();


//!Arrow Function
const displayCity =(cityName) => {
    console.log(`I live in ${cityName}`);
}

displayCity("Mumbai");

// !Higher Order Function
function higherOrderFunction(callbackFunction) {
    console.log("This is a higher order function");
    callbackFunction();

    // You can also return a function from a higher order function
    return function() {
        console.log("This is a returned function from a higher order function");
    }
}

// !Callback Function 
function callbackFunction() {
    console.log("This is a callback function");
}

const returnedFunction = higherOrderFunction(callbackFunction);
returnedFunction();


// !Nested Function
console.log("=====================================");

function outerFunction() {
    console.log("This is the outer function");
    const a = 10;
    const b = 20;

    function innerFunction() {
        const c = 30; // Inner function can access variables from the outer function's scope
        console.log("This is the inner function");
        console.log("The sum of a and b is: ", a + b);  //!here closure will be created for a and b variables inside the inner function 
        // Inner function can access variables from the outer function's scope
        console.log("The value of c is: ", c);
    }

    innerFunction(); // Calling the inner function
}

outerFunction(); // Calling the outer function, which in turn calls the inner function


// ! Generator Function 
// what is the use of the generator function in javascript?
// we can pause and resume the function execution using the generator function

// we have the certain rules how to create the generator function : 
                // i) function should start with the * (asterisk) symbol
                // ii) to pause the execution we have to use the yield keyword
                // iii) to resume the execution we have to use the next() method
                // iv) when I will call this fuction then it will return the generator object 
                // that object will have the inbuilt method to resume the execution of the function
                //
                /*
*next(): it will return the one object it have the below properties in that object 
*done : means the function is completelly executed or not 
*value = means the value that you have put it for the yield */

                console.log("=====================================");
            
 function* generatorFunction() {
    console.log("Generator function started");
    yield "First yield"; // Pauses execution and returns the value
    console.log("Generator function resumed");
    yield "Second yield"; // Pauses execution again
    console.log("Generator function completed");
    return "Final return value"; // Returns a final value
}  

// console.log(generatorFunction);
const generatorObject = generatorFunction(); // Create a generator object
// console.log("Generator object returned:", generatorObject);
console.log("First yield value:", generatorObject.next());

// generatorObject.next()) this will return the one object that will have the two properties in it that is 
// 1st ) done : false (it will track whether the function execution is completed or not)
// 2nd ) value : "First yield" (it will return the value that you have put it for the yield)
console.log("Second yield value:", generatorObject.next());
console.log("Third yield value:", generatorObject.next());  //here the function execution is done so it will return the done : true and value : "Final return value"



// ! Function Constructor (function which is used to create the objects and initialize its properties)
// here only I will be showing how to use the call , apply and bind methods on the functions and how it will change the context of 'this' in functions

function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this); //here this will refer to the window object inside the named function 
}

function greetings(cityName) {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${cityName}.`);
}

// Note : call , apply , bind methods are used to set the value of this keyword in functions and accordinglly access the data 

//! Now first I will be creating the some objects using the function as the constructor that is Person function 

const person1 = new Person("Manoj", 25);
const person2 = new Person("John", 30);
const person3 = new Person("Alice", 28);    
const person4 = new Person("Bob", 35);

// ! call Method
// Call method is used to call a function with a specific context (this value) and pass arguments to it.
greetings.call(person1); // Here 'this' refers to person1 object

// ÷so if any extra arguments are there that I have to pass it using the quama seperated 
greetings.call(person2, "New York"); // Here 'this' refers to person2 object and passing cityName as an argument


// !apply Method 
// it is also used to set the value of this keyword in the function but it will take the arguments as an array
greetings.apply(person3 , ["Los Angeles"]); // Here 'this' refers to person3 object and passing cityName as an array

// !bind method 
// it will similar as the call method but it will return the copy of the function with the specified context of this keyword value 
const copyOfGreetings = greetings.bind(person4 , "Chicago"); // Here 'this' refers to person4 object and passing cityName as an argument

console.log("copyOfGreetings :" , copyOfGreetings);
copyOfGreetings();





console.log("===================================== function currying =====================================");

//!function currying
// Function Currying is a technique in JavaScript where you break a function with multiple arguments into a series of functions that take one argument at a time.

// Note : 
    // i) we can able to achive the function currying using the  closure and using the bind method only 



//!using the bind method : 

function add(a , b){
    console.log(`The sum of ${a} and ${b} is: `, (a + b));
}

const add1 = add.bind(this , 10); // Here 'this' refers to the global object, and we are binding the first argument (a) to 10
// now I wanted to pass the 2nd argument (b) to the function
add1(5);

//like this we can use the same function with differnet argument but make sure only one argument at the one time 
const add2 = add.bind(this, 20);
add2(10);



//!using closures 

function outerFunction(a) {
    return function(b) {
        //here closure will be created and it will remember the value of A even outer function got executed completelly 
        console.log(`The multiplication of ${a} and ${b} is: `, (a * b));
    }
}

const multiplyBy2 = outerFunction(2); // Here 'a' is bound to 2
multiplyBy2(5); // Here 'b' is passed as 5, so it will multiply 2 and 5

//!same way we can use the function with the different argument
const multiplyBy3 = outerFunction(3); // Here 'a' is bound to 3
multiplyBy3(4); // Here 'b' is passed as 4,