// !Solving the All the Questions one By one to get beetter in the Scaler Javascript Mock 
//^first lets cover the theory 
// ! link of the online visualization of the javascript code : https://www.jsv9000.app/ or https://vault-developer.github.io/event-loop-explorer/ (prefer first one only)

// What is javascript 
// how javascript Engine works 
// variables in javascript
// hosting in javascript 
// TDZ(temporal dead Zone)
//*do from below 
//Types of Function 
// all types of copies in javascript 
//array strings and their inbuilt methods 
// rest and spread opearator 
// async way of promgramming 
//Scope Chaining : mechanism which looks for the variables 
//Lexical Scope : where we have declared there only we can access but where we are calling the function there we cannot access 
//Closure 

// variables and variable hosting 
// console.log(a); //undefined 

// console.log(b);  //referance error cannot access it before it actual initialization because of the TDZ
// console.log(c);    //referance error 


var a = 10;
let b = 10;
const c = 90;

// var a = 20;

// console.log(a);



// console.log(num1);//undefined because of the respect to the block scope 

//now lets do some behaviour in the block and lets see how it works in the block scope 

{

    // console.log(num1);//undefined because of the respect to the block scope 
    // console.log(num2);  //referance error because of the TDZ

    
    

    var a = 455;   //it will behave same as the global scope variable but in memeory it will get created newlly because number is primitive datatype and in javacsipt primitive datatypes are immutable 

    let num2 = 85;
    const PI = 3.14;
}


//Now in the function var will be with respect to the function scope only 
// console.log(favNum);//not defined 

function abc(){

    // console.log(favNum);//undefined 

    // console.log(num2);  //referance error

    var favNum = 100;

    console.log(favNum);  //100

    
    let num2 = 45;
    const radius = 2;
}

// console.log(favNum);//not defined 

// abc();



//*Closure 
//creating the nested function 

function outer(){
    let a = 20;
    let b = 45;
    var c = 100;

    function inner(){
        // for the variables a nd b the closure will get created inside the inner function 
        console.log("a = : " , a);
        console.log("b = : " , b);
    }

    return inner;
}

// let innerFunction = outer();

//now I have to invoke the inner function 
// innerFunction();








// ! How to convert the String to Array


let str3 = "this week mock along with css";

// *Using split method we can convert the String to Array 
// *Generally we pass the argument as the space 

// console.log(str3.split(""));    // * from the argument that we will passs from that it will be sepearated now here each character will get converted into the array element 


let arrayMock = str3.split(" ");  // it converted into the Array and we stored it 

// console.log(arrayMock);




//!the ways to create the Array 

//literal way 
let arr1 = [10 , 20 , 30 , 40 , 50];

// console.log(arr1);

//using the Array constructor 
let arr2 = new Array();

// console.log(arr2);


//using Array.from() but it will take only one argument that is string only 

let arr3 = Array.from("This is new Array");  //*it will convert the each character into the Array element 

// console.log(arr3);


let arr4 = Array.of("Manoj" , 10 , 45 , [10 , 20] , 45);  //iit will treat the each Array element as sepearate 

// console.log(arr4);


// !All notes again by Sir for Array Methods 

// & Methods will modify the original Array :
/**
 * * .pop() : it will remove the Array element from the last 
 * 
 * * .push(argument1 , argument2) : it will add the element to the Array at last 
 * 
 * * .shift(): it will remove the element from the start from the Array 
 * 
 * * .unshift(argument1 , argument2) : it will add the Array elements to the front 
 * 
 * * .splice(starting_index , elementCount that wanted to remove , elements that wanted to add) : it will remove and also add the elements in the Array 
 * 
 * * .reverse()  : it will reverse the given Array itself
 * 
 * * .sort() : it is the HOF (used to arrange the data in Ascending or descending order)
 * *           its call back will take the two arguments 
 * *            that are     
 * *           (A : means second value  B : previous  value )  
 * !Note :  above is used to sort the two digit or more digit numbers 
 * !           if we will use only sort() method then it will sort based on the first character or first number 
 *          
 */





// !Methods to iterate over the Array (it will not modify the original Array )
// ^ iterating all methods are the HOF
/**
 * & 1)forEach() : it will iterate All the elements of the Array 
 * *              return type is void means undefined 
 * 
 * * Syntax :   forEach((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 * 
 *  & 2)map() : it will iterate All the elements of the Array 
 * *              return type is copy of the Array with optional modified elements 
 * 
 * * Syntax :   map((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 * 
 *  & 3)filter() :   it will iterate All the elements of the Array 
 * *                return type is array with condition statisfied elements of the call back function 
 * 
 * * Syntax :   filter((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 *  & 4)find() :   it will iterate All the elements of the Array 
 *   *              but it will stop iterating once the condition satisfied 
 * *                return type is only one  element which satisfied condition (single value)
 * 
 * * Syntax :   find((arrayElement , arrayIndex , originalArray) => {
 * 
 * *            })
 * 
 * 
 * 
 * & 5)reduce() :   it will iterate All the elements of the Array 
 * *                 in first iteration accumalater value is first element 
 * *                  from second iteration accumalater value is returned value 
 * *                  return type is only one  value that is the final value of the accumalater 
 * 
 * * Syntax :   reduce((accumulater , currentArrayElement , arrayIndex , originalArray) => {
 * 
 * *                     return (operation with accumalater with array element)
 * 
 * *            } , accumalater_initial_value_we can pass );
 * 
 * 
 * 
 *   & 6)reduceRight() :      it is similar to reduce but iterate from the right to left 
 * *                            in first iteration accumalater value is first element from the right side 
 * *                            from second iteration accumalater value is returned value 
 * *                        return type is only one  value that is the final value of the accumalater 
 * 
 * * Syntax :   reduce((accumulater , currentArrayElement , arrayIndex , originalArray) => {
 * 
 * *                     return (operation with accumalater with array element)
 * 
 * *            } , accumalater_initial_value_we can pass );
 * 
 * 
 */


// !Convert the Array to String methods 

/**
 * * 1) toString(): it will convert the Array to String but it will not accept the any arguments 
 * 
 * * 2) join() : it will also convert the Array to String but it will accept the optional argument 
 * 
 */

// ! Similar to String Methods (4 Methods)

/**
 * * 1) indexOf() 
 * * 2) lastIndexOf() 
 * * 3) concat(): 
 * * 4) slice():
 */


// !Array methods with boolean values which are also HOF (2 Methods)

/**
 * * 1)every() : here All elements should satisfy the condition of the call back function then it will return true else it will return false 
 * 
 * 
 * 
 * * 2) some() : here any-One elements should satisfy the condition of the call back function then it will return true else it will return false 
 */





// !Notes of Objects
// to get the All the keys of the object in the Array format 
// Object.keys();           //*return All keys in Array format 
// Object.values();         //*return All values in Array format 
// Object.entries();        //*return All keys and values in 2D Array format 
// Object.freeze();         //*it will freeze the Object (Not able to change the values of the keys also)
// Object.seal();           //*it will seal the Object (we can able to change the values of the keys in seal)
// Object.isFrozen();       //* here it will check whether the Object if frezze or Not  (return the boolean values)
// Object.isSealed();        //* here it will check whether the Object if sealed or Not 

// ^ Using the assign() method we can merge the both the Object 
// ~Assigning the demo2 properties to the demo1 

// Object.assign(demo1 , demo2);

// ! IMP Note : All Frozen Objects Are sealed but vice-versa it is Not 






let obj2 = {
    name : "Manoj",
    sport : "football",
    age : 24
}

let obj3 = {
    name : "chiku",
    age : 14,
    favPerson : "Manoj"

}



let allKeys = Object.keys(obj2);

// console.log(allKeys);

let allValues = Object.values(obj2);

// console.log(allValues);

//now get the all the keys and values in the 2D Array format 

let allKeysAndValues = Object.entries(obj2)

// console.log(allKeysAndValues);


//now to merge the object using assign() method 

let mergedObject1 = Object.assign(obj2 , obj3); //it will merge  the properties that are there in the obj2 also means it will basically override those properties 

// console.log(mergedObject1);

//same we can do it using the spread opearator that we didi using the assign method 

// *Spread Operator : it is used to copy the elements (it will create the one object )
// !we will do the Object Destructuring 
// !Object Destructuring : (VIMP Topic)
/**
 * * {} = it will represent the Object Destructuring
 * * [] = it will represent the Array Destructuring
 */
// console.log({...obj2 , ...obj3});   //* it will not modify the original Object 

let mergedObject2 = {...obj2 , ...obj3};

// console.log(mergedObject2);   //{name: 'chiku', sport: 'football', age: 14, favPerson: 'Manoj'}



//!the No of the ways we can create the objects in Javascript 
//4 ways 
/**
    ** 1) literal way
    ** 2) Using inbuilt Object constructor 
    ** 3) using constructor  function
    ** 4) using the class inside that defining the constructor for that class 

*/


// 1) literal way
let obj5 = {
    name : "Kiyansh",
    age : 1
}

// console.log("literal way" , obj5);

// 2) Using inbuilt Object constructor 

let obj6 = new Object();   //this is going to be empty object 

// console.log(obj6);   //{}

obj6.name = "Aarav";

// console.log(obj6);   //{name: 'Aarav'}



//3) using constructor  function

function Car(name , manufactureYear , pinCode){
    this.carName = name;
    this.manufactureYear = manufactureYear;
    this.pinCode = pinCode;
}


let car1 = new Car("Mercedize GLX" , 2024 , 42102);

let car2 = new Car("Toyota innova" , 2024 , 400033);


// console.log( "using constructor  function " , car1);
// console.log("using constructor  function " , car2);




// 4) using the class inside that defining the constructor for that class 

class Comapny{
    //each calss can have some properties and some behaviour 
    // properties = what each object can have in the form of the variables 
    // behaviour = what each object can do in the form of the methods 
    constructor(name , Year , Revenue , profitOrLoss){
        this.companyName = name;
        this.yearOfEstablished = Year;
        this.revenue = Revenue;
        this.profitOrLoss = profitOrLoss;
    }
}



let company1 = new Comapny("Tata Sons" , 1978 , "1.5 billion" , "profitable");

let company2 = new Comapny("Tata Motars" , 1975 , "3.5 billion" , "profitable");


console.log(" using the class inside that defining the constructor for that class ");
console.log(company1);

console.log(company2);

//Object.freeze()

Object.freeze(company1);

delete company1.companyName ;  //we cannot delete , cannot add , cannot update the values also 

console.log(company1);

//Seal()
Object.seal(company2);     //here we can only update the values but cannot delete and add more properties 

delete company2.profitOrLoss;

console.log(company2);

//but i CAN ABLE TO UPDATE THE VALUES OF THE PROPERTIES 

company2.profitOrLoss = "Loss Making Company";

console.log(company2);


//two methods 

console.log(Object.isFrozen(company1));   //true
console.log(Object.isSealed(company2));   //true




//!Rest and Spread Operator 

//^rest operator = 
//will be there in the declaration that is on the left side 
// it will collect the elements into the one element 

//rest operator is used for Array Destructuring and Object Destructuring 
//by doing the destructuring we can access the elements or properties of the object as it is by their names 


//&Array Destructuring 

let arr6 = [10 , 20 , 30 , 50 , 45 , 65 , 78];

console.log(arr6);

// ^Normal Array Destructuring 

let [firstElement , secondElement] = arr6;

console.log(firstElement , secondElement);  //output = 10 , 20 (only first two elements I can able to access )


// ^ Array Destructuring with rest operator 

//but if I want to access the rest of the elements into the another variable then I have to use the rest operator 
//it will collect the all the in the sigle Array 



let [firstElementOfArr6 , secondElementOfArr6 , ...remainingElements] = arr6;

console.log(firstElementOfArr6 , secondElementOfArr6 , remainingElements);  //10 20 [30, 50, 45, 65, 78]

// remainingElements will have all the rest of the Array elements that is = [30, 50, 45, 65, 78] (it have collected the rest of t he elements into the one Array format)



//^Normal Object destructuring 

let obj7 = {
    firstName : "Manoj",
    car : "safari",
    myLocation : "mumbai",
    pinCode : 400033,
    education : "BE Computer Science" 
}


// let {firstName , pinCode , myLocation } = obj7;

//now I can able to access the properties of the object 6 without using the dot operator directlly by their Name I can able to Access it 

// console.log(firstName , pinCode , myLocation );


//^Now Object destructuring with the rest operator to get the all the remaining properties 

let {firstName , pinCode , myLocation , ...restAllPropertiesOfObj7} = obj7;

// console.log(firstName , pinCode , myLocation , restAllPropertiesOfObj7);   // Manoj 400033 mumbai {car: 'safari', education: 'BE Computer Science'}

//above restAllPropertiesOfObj7 will have all the properties that I have not destructured = {car: 'safari', education: 'BE Computer Science'}


//!Spread operator 
/**
 * !spread opearator : 
 * *                it will spread the elements or properties or characters of array or object or string individually 
 * *                it is used to copy array , object 
 * *                it is used to merge array also it used to merge object 
 * *                in function it is used as arguments 
 *  *               it is synchronous 
 */


//^How spread operator will work in the function to pass as an arguments 
//!In Function to pass as an arguments 

function solve( myName , element1 , element2 , element3 , element4 , element5){
    let sum = 0 ;

    sum = (element1 + element2 + element3 + element4 + element5);

    // console.log(myName);
    // console.log(element1 , element2 , element3 , element4 , element5);

    return sum;
}

let arrInNum = [10 , 20 , 30 , 40 , 100];

let sum = solve("Manoj" , ...arrInNum);   //now here the the remaining elements 30 , 40 , 100 spread operator will spread those elements and pass it as an argument to the solve function 

// console.log(sum);



//!to copy array 

let arr9 = [78 , 89 , 654];

let copyArray9 = [...arr9];   //it will create the new Array and copy the all the elements 

// console.log(copyArray9);


//!to copy the object 
let obj10 = {
    deviceName : "laptop",
    cost : 55000,
    company : "Dell"
}

let copyOfObject10 = {...obj10};   //it will create the new Object and copy the all the properties from the referanced object 

// console.log(copyOfObject10);

copyOfObject10.company = "HP";


//!now to merge the two Array and create the one Array 

let mergedArray = [...arr9 , ...copyArray9];

// console.log(mergedArray);


//!now to merge the two objects 

let mergedObject = {...obj10 , ...copyOfObject10};   // properties values will be override by the copyOfObject10

// console.log(mergedObject);

//merging the object using the assigned method inbuilt 

let mergedObject3 = Object.assign(obj10 , copyOfObject10);

// console.log(mergedObject3);





// Always validate user input to prevent security vulnerabilities.
// A well-documented code helps other developers understand your work.
// Consider using code linters to catch syntax errors and enforce coding standards.
// Utilizing design patterns can make your code more robust and scalable.
// Testing edge cases helps ensure your code's reliability under various conditions
// Taking breaks and staying hydrated can help you stay focused and write better code.
















//!Now lets go to the all the copies 
/**
 * *1) value copy
 * *2) referance copy
 * *3) shallow copy
 * *4) deep copy  copy
 */

//*1) value copy

let num1 = 10;

let num2 = num1;

//now I will change the value of the num1 then only num1 will only get changed num2 value will be 10 only 

num1 = 45;

// console.log(num1);   //45
// console.log(num2);   //10



//* 2) referance copy

let object1 = {
    name : "prithvi",
    age : 5,
    car : {
        carName : "Mercedes-Benz GLS",
        price : "1.37 Crore"
    }
}

let object2 = object1;

console.log(object1);   //{name: 'prithvi', age: 5 , car: {…}}
console.log(object2);    //{name: 'prithvi', age: 5 , car: {…}}


//now if I will do the changes in any object then it will get reflected to another object also 
//because the both objects are pointing to the same memory address in heap 

object1.name = "Aanant";

console.log(object1);    //{name: 'Aanant', age: 5 , car: {…}}
console.log(object2);    //{name: 'Aanant', age: 5 , car: {…}}


//!Now to solve this issue we will create the shallow copy 
//to create the shallow copy we will use the spread operator 
console.log("Shallow Copy");

//*3) shallow copy

let shallowCopyOfObject1 = {...object1};

console.log(shallowCopyOfObject1);
console.log(object1);

//now if I will do the changes for object1 then it will  not get reflected for its shallow copy 
//because the shallow copy is having the another address in the heap 
//but for the nested objects inside the shallow copy are sharing the same address so if I will do the changes for the any nested object then that will also get reflect to the its shallow copy also 

object1.name = "Mahi";  //this will happen to the object 1 only 

console.log(shallowCopyOfObject1);      //{name: 'Aanant', age: 5, car: {…}}
console.log(object1);                   //{name: 'Mahi', age: 5, car: {…}}

//!but if I will change the its nested object property then it will get reflected to its shallow copy also 

object1.car.carName = "Tata Harrier";

console.log(shallowCopyOfObject1);     
console.log(object1);      


// !Because of shallow copy will share the same addredd for the nested objects it will restrict only the first level properties of the object 

//so to handle the above problem we will create the deepCopy 
//using JSON.stringify() and JSON.parse();
// first we will treat that entire object as the one string value 
//then we again convert it into the javascript object using the JSON.parse() then for the nested objects also the address will changed

let objectInString = JSON.stringify(object1);
let deepCopyOfObject = JSON.parse(objectInString);

object1.car.carName = "Toyota INNOVA";

console.log(object1);               //here carName: 'Toyota INNOVA'
console.log(deepCopyOfObject);      //but here carName: 'Tata Harrier'

//In this way we can prevent the changes that made to the one object should not reflect to the another object in javascript 








// !Everything about the promise 

// !What is Promise ? 
// Promise is the one object in javascript which will re-present the eventual-complition or the failure of the asynchronus task 

// Now What Asynchronus Task is ? ( means heavy operations )
// Example : 
// i) fetching the data from the server
// ii) reading the file from the disk   
// iii) making the api call
// iv) making the database call


// How to create the promise ? 
// using the Promise constructor

//! Note : creating the promise is synchronous operation but handling the promise is asynchronous operation

const promise1 = new Promise((resolve , reject) => {
    // Now I will use one setTimeout to resolve my promise after the few seconds

    setTimeout(( ) => {
        resolve("promise resolved");
    } , 5000);
});



// !Now lets see how to handle the promise
// usiing 3 ways 
// 1) using then() and catch() method
// 2) using async and await
// 3) using then() and catch() ,finally() method


// !Using then() and catch() method
console.log(promise1) //this will pending 

promise1.then((result) => {
    console.log("promise resolved", result);
    console.log(promise1);  //this will show the promise state as fulfilled
}).catch((error) => {
    console.log("promise failed" , error);
})


// to see the promise is resolved or rejected or fullfilled 
// console.log(promise1);  //!directlly print the promise if it is pending it will have the promise state as the pending only 


// !Using then() and catch() ,finally() method

const promise2 = new Promise((resolve, reject) => {
    const shouldresolve = true; // Randomly decide to resolve or reject
    setTimeout(() => {
        if (shouldresolve) {
            resolve("Promise 2 resolved");
        } else {
            reject("Promise 2 rejected");
        }
    }, 3000);
});

// !handling the promise using then() and catch() ,finally() method
promise2.then((result) => {
    console.log("Promise 2 resolved:", result);
    console.log(promise2); // This will show the promise state as fulfilled
}).catch((error) => {
    console.log("Promise 2 rejected:", error);
}).finally(() => {
    console.log("Promise 2 completed, regardless of resolution or rejection.");
    console.log(promise2); // This will show the final state of the promise
})



// !Using async and await
const fetchDatFromServer = async () => {

    try{
        const response = await fetch("https://fakestoreapi.com/products");

        console.log("response:", response);  //this is also the promise that I got that I have to convert to json

        //here I can use the response.json() to convert the response to json format or JSON.parse(response) if I wanted to use the JSON.parse() method
        // .json() is asynchronous operation that returns a promise, so we can use await to handle it
        // JSON.parse() is synchronous operation that converts the response to json format but it will not return a promise
        
        const data = await response.json(); // converting the response to json format 
        console.log("Data from server:", data); // this will give the data from the server

        // !if I wanted to use the axios then either install and use or use it using the cdn link
        // const data = await axios.get("https://fakestoreapi.com/products"); // using axios to get the data from the server
        // console.log("Data from server:", data); // this will give the data from the server
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}

fetchDatFromServer(); // calling the async function to fetch the data from the server









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