// All javascript Revision

//Number , String , Boolean , BigInt , Array , Object , Function , promises

// Primitive Data Types
// Number , String , Boolean , BigInt , Undefined , Null , Symbol , NaN

// Non-Primitive Data Types
// Array , Object , Function

// All about the variables in javascript

// console.log(a);   //undefined
// console.log(num1);  //ReferenceError
// console.log(num2);  //ReferenceError


// var a = 10;
// let num1 = 20.56789;
// const num2 = 30.12345;
// console.log(a);

// All About the Number Methods  

let num1 = 20.56789;
console.log("original number",num1); //20.56789

// I wanted to check whether the given number is number or not 
console.log( "isFinite",isFinite(num1)); //true

// I wanted to check whether the given value is NaN or not
console.log("isNaN",isNaN(num1)); //false

// Now I wanted to convert the number into Integer
console.log("parseInt",parseInt(num1)); //20

// Now I wanted to convert the number into Float
console.log("parseFloat",parseFloat(num1)); //20.56789

// Now I wanted to convert the number into String
console.log("toString",num1.toString()); //20.56789

// Now I wanted to convert the number into Fixed value
console.log("toFixed",num1.toFixed(2)); //20.56

// now I wanted to convert the number into the power of 10 
console.log("toExponential",num1.toExponential()); //2.056789e+1

// Now I wanted to get the max value of the number 
console.log("MAX_VALUE",Number.MAX_VALUE); //1.7976931348623157e+308

// Now I wanted to get the min value of the number 
console.log("MIN_VALUE",Number.MIN_VALUE); //5e-324

// Now I wanted to get the positive infinity value of the number 
console.log("POSITIVE_INFINITY",Number.POSITIVE_INFINITY); //Infinity

// Now I wanted to get the negative infinity value of the number 
console.log("NEGATIVE_INFINITY",Number.NEGATIVE_INFINITY); //-Infinity

// Now I wanted to get the max safe integer value of the number 
console.log("MAX_SAFE_INTEGER",Number.MAX_SAFE_INTEGER); //9007199254740991

// Now I wanted to get the min safe integer value of the number 
console.log("MIN_SAFE_INTEGER",Number.MIN_SAFE_INTEGER); //-9007199254740991



// All About BigInt
console.log("================BigInt===================");

let bigIntNum = BigInt(1234567890123456789012345678901234567890);
console.log("BigInt Number",bigIntNum); //1234567890123456789012345678901234567890n
console.log("Type of BigInt Number",typeof bigIntNum); //bigint


// using the suffix as the n 
let bigIntNum2 = 1234567890123456789012345678901234567890n;
console.log("BigInt Number 2",bigIntNum2); //1234567890123456789012345678901234567890n



// All About the String Methods
// Below I have used the bactics 
// on the mac I have to use the caps lock on then press the button which is present left side of the 1 key
console.log(`
    ================String Methods===================
    `);

let userName = "Manoj Kumar";
console.log("Original String : ",userName); //Manoj Kumar

// /Methods to get the index of the character in the string
// and below both the methods will also takke the one extra parameter which is the starting index to search the character

console.log("indexOf",userName.indexOf('o')); //4. 
console.log("lastIndexOf",userName.lastIndexOf('o'));

// Methods to get the character at the specified index
console.log("charAt",userName.charAt(4));//j

console.log("userName[4]",userName[4]); //j

// Then the Searching methods
console.log("startsWith",userName.startsWith("Manoj")); //true
console.log("endsWith",userName.endsWith("Kumar")); //true
console.log("includes",userName.includes("Man")); //true

// methods to convert the tsring to the uppercase and the lowercase
console.log("toUpperCase",userName.toUpperCase()); //MANOJ KUMAR
console.log("toLowerCase",userName.toLowerCase()); //manoj kumar


// methods to get the part of the string that is known as the substring

console.log("substring",userName.substring(0,5)); //Manoj
console.log("slice",userName.slice(-6)); //Kumar

// method to get the length of the string 
console.log("length",userName.length); //10

// Method to convert the string into array 

const newArray1 = userName.split("");
console.log("string to array",newArray1); //['M', 'a', 'n', 'o', 'j', ' ', 'K', 'u', 'm', 'a', 'r']

const newArray2 = userName.split(" ");
console.log("string to array",newArray2); //['Manoj', 'Kumar']


//Methods that will be used for the concatination of the strings
let firstName = "Manoj";
let lastName = "Kumar";

console.log("Using + operator",firstName + " " + lastName); //Manoj Kumar
console.log("Using concat method",firstName.concat(" ",lastName)); //Manoj Kumar
console.log("Using template string",`My name is ${firstName} ${lastName}`); //My name is Manoj Kumar

// /methods that will be used to remove the extra spaces
let newString = "     Hello World     ";
console.log("original string with spaces",newString); //     Hello World     
console.log("after using trim method",newString.trim()); //Hello World
console.log("after using trimStart method",newString.trimStart()); //Hello World     
console.log("after using trimEnd method",newString.trimEnd()); //     Hello World




// All About the Boolean Methods
console.log(`
    ================Boolean Methods===================
    `);

let bool1 = true;
let bool2 = false;

console.log("Original Boolean 1",bool1); //true
console.log("Original Boolean 2",bool2); //false    
console.log("Type of Boolean 1",typeof bool1); //boolean

console.log(Boolean(1)); //true
console.log(Boolean(0));


// Now below is the remaining data types
// Array , Object , Function , promises

// Ways to crate the Array
// first using the literal way 

console.log(`
    ================Array===================
    `)

const array1 = [1,2,3,4,5];
console.log("Array 1",array1); //[1,2,3,4,5]

//then if I wanted to get the length of the given array simply use the length property
console.log("Length of the array 1 is : ",array1.length); //5


//Second way to declare the array using the Array constructor
const array2 = new Array(6,7,8,9,10);
console.log("Array 2",array2); //[6,7,8,9,10]

//Then Third using the Array.from method
const array3 = Array.from("Manoj Kumar");
console.log("Array 3",array3); //['M', 'a', 'n', 'o', 'j', ' ', 'K', 'u', 'm', 'a', 'r']

// Then Fourth using the Array.of method
const array4 = Array.of(11,{
    name : "Manoj",
    age : 26
},13,"Hello",15);
console.log("Array 4",array4); //[11, {name: 'Manoj', age: 26}, 13, 'Hello', 15]

// Now to check whther the given Array of array or Not 
console.log("isArray for array1",Array.isArray(array1)); //true



// Mthods of the Array That will modify the original Array

const fruits = ["Banana","Orange","Apple","Mango"];

console.log("Original fruits array",fruits); //['Banana', 'Orange', 'Apple', 'Mango']

//push method will add the element at the end of the array
fruits.push("Pineapple");
console.log("After push method",fruits); //['Banana', 'Orange', 'Apple', 'Mango', 'Pineapple']

//pop method will remove the last element from the array
fruits.pop();
console.log("After pop method",fruits); //['Banana', 'Orange', 'Apple', 'Mango']

// shift method will remove the first element from the array
fruits.shift();
console.log("After shift method",fruits); //['Orange', 'Apple', 'Mango']

// unshift method will add the element at the start of the array
fruits.unshift("Banana");
console.log("After unshift method",fruits); //['Banana', 'Orange', 'Apple', 'Mango']

// splice method will add or remove the element from the array based on the given index
// fruits.splice(starting index, number of elements to be removed, elements to be added)
fruits.splice(2,1,"Grapes","Pineapple");
console.log("After splice method to add the elements",fruits); //['Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango']

//reverse method will reverse the array
fruits.reverse();
console.log("After reverse method",fruits); //['Mango', 'Pineapple', 'Grapes', 'Orange', 'Banana']

//sort method will sort the array in ascending order
fruits.sort();
console.log("After sort method",fruits); //['Banana', 'Grapes', 'Mango', 'Orange', 'Pineapple']


//now for the sort take the one more array 
const numArray = [10 , 20 , 5 , 40 , 1 , 100 , 25];
console.log("Original numArray",numArray); //[10, 20, 5, 40, 1, 100, 25]

numArray.sort();
console.log("After sort method",numArray); //[1, 100, 10, 20, 25, 40, 5]

//so in the aboveit is sorting based on the first digit of the each element in the my array in increasing order 
// so if it should consider the entire number then I have to pass the callback function to the sort method

numArray.sort((A , B) => {
    return (A-B);
});

console.log("After sort method with the callback function",numArray); //[1, 5, 10, 20, 25, 40, 100]

//now same I have to sort the array in the decreasing order 
numArray.sort((A, B) => {
    return (B - A);
});

console.log("After sort method in decreasing order",numArray); //[100, 40, 25, 20, 10, 5, 1]

//Methods that will used to iterate over the Array 
console.log(`
    ================Array Iteration Methods===================
    `)

 
const productsArray = [
    {id:1, productName:"Laptop", price:50000},
    {id:2, productName:"Mobile", price:20000},
    {id:3, productName:"Tablet", price:15000},
    {id:4, productName:"Monitor", price:10000},
    {id:5, productName:"Keyboard", price:2000},
    {id:6, productName:"Mouse", price:1000},
];

// forEach()method that will return the undefined

const forEachresult = productsArray.forEach((currentElement , currentIndex , originalArray) => {
    console.log(`The product name is ${currentElement.productName} and the price is ${currentElement.price}`);
});

console.log("forEachresult",forEachresult); //undefined

//map() method that will return the new array

const copyOfArray = productsArray.map((currentElement , currentIndex , originalArray) => {
    if(currentElement.price > 10000){
        return currentElement;
    }
});

console.log("copyOfArray",copyOfArray);
//copyOfArray (6) [{…}, {…}, {…}, undefined, undefined, undefined]


//now to resolve this problem and I want to get only the filtered array elements then I have to use the filter method
const filteredArray = productsArray.filter((currentElement , currentIndex , originalArray) => {
    if(currentElement.price > 10000){
        return true; //here return true or that element so that will be added to new filtered array 
    }
});

console.log("filteredArray",filteredArray);
//filteredArray (3) [{…}, {…}, {…}]


//find method that will return the first matched element based on the condition

const findResult = productsArray.find((currentElement , currentIndex , originalArray) => {
    if(currentElement.price === 15000){
        return true; //here return true or that element so that will be added to new filtered array
    }
});

console.log("findResult",findResult); //{id: 3, productName: 'Tablet', price: 15000}


//some method return true when the any of the array element satisfy the its callback condition otherwise false
const someResult = productsArray.some((currentElement , currentIndex , originalArray) => {
    if(currentElement.price > 15000){
        return true;
    }
});

console.log("someResult",someResult); //true

//every method return true when all the array element satisfy the its callback condition otherwise false
const everyResult = productsArray.every((currentElement , currentIndex , originalArray) => {
    if(currentElement.price > 15000){
        return true;
    }
});

console.log("everyResult",everyResult); //false

// reduce method that will reduce the array to single value based on the condition used for some calculation purose
const reduceResult = productsArray.reduce((accumalater_value , currentElement , currentIndex , originalArray) => {
    return (accumalater_value + currentElement.price);
} , 10)

console.log("reduceResult",reduceResult); //98010 Rs

// reduce right
const reduceRightResult = productsArray.reduceRight((accumalater_value , currentElement , currentIndex , originalArray) => {
    return (accumalater_value + currentElement.price);
} , 100);

console.log("reduceRightResult",reduceRightResult); //98100 Rs


//now methods that will convert the Array to string 
const Array5 = [1,2,3,4,5,6,7,8,9,10];

console.log("Original Array5",Array5); //[1,2,3,4,5,6,7,8,9,10]

//toString method
const toStringResult = Array5.toString();
console.log("toStringResult",toStringResult); //1,2,3,4,5,6,7,8,9,10
console.log("Type of toStringResult",typeof toStringResult); //string

//join method
const joinResult = Array5.join("");
console.log("joinResult",joinResult); //1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10
console.log("Type of joinResult",typeof joinResult); //string


//Methods that will used to merge the two arrays 
const arrayA = [1,2,3];
const arrayB = [4,5,6];

//concat method
const concatResult = arrayA.concat(arrayB);
console.log("concatResult",concatResult); //[1,2,3,4,5,6]

//using the spread operator
const spreadResult = [...arrayA , ...arrayB];
console.log("spreadResult",spreadResult); //[1,2,3,4,5,6]



// All About the Object
console.log(`
    ================Object===================
    `)

//Ways to create the Object
//First using the object literal way
const obj1 = {
    name : "Manoj Kumar",
    age : 26,
    isMarried : false,
    skills : ["JavaScript","HTML","CSS","ReactJS","NodeJS"],
    address : {
        street : "123 Main St",
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    greet : function(){
        console.log("Hello, My name is " + this.name);
    }
};

console.log("Object 1 lietral way",obj1);


//Now using the Object constructor way

const obj2 = new Object();
obj2.name = "Kumar Sanu";
obj2.age = 27;

console.log("Object 2 using constructor",obj2);


// Now using the function as the constructor 

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function() {
        return `${this.brand} ${this.model} (${this.year})`;
    };
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log("Car 1",car1);
console.log("Car 2",car2);
console.log("Car 1 Details",car1.getDetails());
console.log("Car 2 Details",car2.getDetails());

// Now using the Object.create() method this will inherit the properties of the given object

const car3 = Object.create(car1);
car3.brand = "Ford";
car3.model = "Mustang";


console.log("Car 3 using Object.create",car3);
console.log("Car 3 Details",car3.getDetails());  //here the year will be 2020 because it is inheriting the properties of the car1 object


//now all the object methods 

const person = {
    firstName : "Manoj",
    lastName : "Kumar",
    age : 26,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log("Person Object",person);
console.log("Full Name using method",person.fullName());

//now to get the all the keys of the person object
const keys = Object.keys(person);
console.log("Keys of person object",keys); //['firstName', 'lastName', 'age', 'fullName']

//now I wanted to get the all the values of the person object 
const values = Object.values(person);
console.log("Values of person object",values); //['Manoj', 'Kumar', 26, ƒ]

//now I wanted to get the all the entries of the person object 
const entries = Object.entries(person);
console.log("Entries of person object",entries); //[['firstName', 'Manoj'], ['lastName', 'Kumar'], ['age', 26], ['fullName', ƒ]]

//Now if I wanted to freeze the person object means no one can add , delete or modify the properties of the person object
Object.freeze(person);
person.age = 30;
console.log("After modifying the age property",person.age); //26 because it will not allow to modify the properties of the person object

//Now if I wanted to seal the person2 object means no one can add or delete the properties of the person object but can modify the existing properties
const person2 = {
    firstName : "Kumar",
    lastName : "Sanu",
    age : 29,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
Object.seal(person2);
person2.age = 35;
console.log("After modifying the age property of person2 object",person2.age); //35 because it will allow to modify the existing properties of the person2 object

//Note : so all the fozen objects are sealed but vice versa not 

//if I want to check the my object is frozen or not
console.log("is person object frozen",Object.isFrozen(person));

console.log("is person2 object frozen",Object.isFrozen(person2));

//if I want to check the my object is sealed or not
console.log("is person object sealed",Object.isSealed(person));

console.log("is person2 object sealed",Object.isSealed(person2));


//How to merge the two objects 
// two ways 
// 1) using the Object.assign() method
// 2) using the spread operator

const objA = {
    name : "Manoj Kumar",
    age : 26
};

const objB = {
    city : "Mumbai",
    country : "India",
    age : 30. //the meged object will have the age as the 30 because it will take the last value of the same property
};

//using the Object.assign() method
const mergedObj1 = Object.assign(objA,objB);
console.log("Merged Object 1 using Object.assign",mergedObj1); //{name: 'Manoj Kumar', age: 26, city: 'Mumbai', country: 'India'}

//using the spread operator     
const mergedObj2 = {...objA , ...objB};
console.log("Merged Object 2 using spread operator",mergedObj2); //{name: 'Manoj Kumar', age: 30, city: 'Mumbai', country: 'India'}


// All About the value copy , reference copy , shallow copy , deep copy
console.log(`
    ================value copy , reference copy , shallow copy , deep copy===================
    `)

//value copy
console.log("value copy");
let val1 = 10;
let val2 = val1;
console.log("val1",val1);
console.log("val2",val2);


console.log(`
    reference copy`)

const bike1 = {
    brand : "Honda",
    model : "CBR",
    year : 2020,
    getDetails : function(){
        return `${this.brand} ${this.model} (${this.year})`;
    },
    accessories : {
        helmet : "Studds",
        gloves : "Racing",
        jacket : "Leather"
    }

};


const referenceCopyBike = bike1; //here both the bike1 and referenceCopyBike will point to the same memory location

console.log("bike1",bike1);
console.log("referenceCopyBike",referenceCopyBike);

//now see if I am updating the brand for the bike 1 then it will also get updated for the referenceCopyBike
bike1.brand = "Yamaha";

console.log("After updating the brand for bike1");
console.log("bike1",bike1);
console.log("referenceCopyBike",referenceCopyBike); //here also the brand will be updated to Yamaha because both are pointing to the same memory location

//!so to restrict the this behaviour I have to use the shallow copy
// we can create the shallow copy using the spread operator 

const shallowCopyBike = {...bike1}; //here both the bike1 and shallowCopyBike will point to the different memory location

console.log("shallowCopyBike",shallowCopyBike);

//now I will do update the brand for the bike1
bike1.brand = "Suzuki";

console.log("After updating the brand for bike1");
console.log("bike1",bike1);  
console.log("shallowCopyBike",shallowCopyBike); //here the brand will be Honda because both are pointing to the different memory location

//Note: for the bike1 the brand got updated to the Suzuki but for the shallowCopyBike it is still Honda but lets see if one level down I will update the details it can persist or not 

bike1.accessories.helmet = "Vega";

console.log("After updating the helmet for bike1");
console.log("bike1.accessories",bike1.accessories);  
console.log("shallowCopyBike.accessories",shallowCopyBike.accessories); //here the helmet will be Vega because both are pointing to the different memory location for the bike1 and shallowCopyBike but for the accessories both are pointing to the same memory location so it will get updated for both the objects

// !so to restrict the above behaviour I have to use the deep copy
// we can create the deep copy using the JSON.parse() and JSON.stringify() method

const stringifiedBike = JSON.stringify(bike1); //first convert the object to the string
const deepCopyBike = JSON.parse(stringifiedBike); //then convert the string to the object

//now lets I willl upgrate the helmet for the bike1 it will not get affected to the deepCopyBike because for nested objects also it is having the different address in the heap memory 
bike1.accessories.helmet = "Arai";

console.log("After updating the helmet for bike1");
console.log("bike1.accessories",bike1.accessories);  
console.log("deepCopyBike.accessories",deepCopyBike.accessories); //here the helmet will be Vega because both are pointing to the different memory location for the bike1 and deepCopyBike


// All About the Function
console.log(`
    ================Function===================
    `)

//Types of functions 
// 1) Named function 
// 2) Anonymous function
// 3) function expression
// 4) Arrow function
// 5) IIFE function
// 6) Callback function
// 7) Higher Order function
// 8) Nested Function 
// 9) Generator function
// 10) Function as an constructor and its methosd call apply and bind 


// 1) Named function
function add(a , b){
    return a + b;
}

console.log("Named function add",add(10,20)); //30

// 2) Anonymous function (we cannot use it directlly we have to assign it to the variable)
//  function(a , b){
//     return a - b;
// }

// 3) function expression
const subtract = function(a , b){
    return a - b;
}

console.log("Function expression subtract",subtract(20,10)); //10

// 4)Arrow Function 
const multiply = (num1 , num2) => {
 return (num1 * num2);
}

console.log("Arrow Function multiply",multiply(10,20)); //200

// 5)IIFE function (Immediately Invoked Function Expression)
(function(name){
    console.log("IIFE function Hello " + name);
})("Manoj");


// 6) callback function
const addCallback = (num1 , num2) => {
    console.log("Callback function add");
    return num1 + num2;
}

// 7) Higher Order function
const higherOrderFunction = (a , b , addCallback) => {
    return addCallback(a , b);
}

console.log("Higher Order function add",higherOrderFunction(10,20,addCallback));


// 8) Nested Function
// !Lexical Scope : 
/*
                *it means organizing and Accessing variables which are controled by functions or block 
                *of codes based on where we are writing block of code not on where they got called 
                *or executing */



                
//!Closure : Closure will be created in inner function for outer Function 
        // the values or variables that we are accessing in the inner function that only will get stored in the Closure 

// *Defination of Closure :
                        /*
                        *closure is a special feature in javascript it will remaimber outer function variable  
                        *in inner function even though outer function stop executing
                        *Closure will be created in inner function for outer function variables 
                        *which are getting accesed in the inner function  */




function outerFunction(){
    const num1 = 10; 
    const num2 = 20;
    const name = "Manoj Kumar";

    function innerFunction(){
        const greeting = "Hello " + name + " the sum of " + num1 + " and " + num2 + " is : ";
        console.log(greeting);
        return num1 + num2;
    }

    return innerFunction();
}


console.log(outerFunction()); //Hello Manoj Kumar the sum of 10 and 20 is : 30


// 9) Generator function
function* generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}

// see you have to call the generator function it will return the generator object so then with the help of the next() method I can able to to unpause the execution of the function

const genObject = generatorFunction();

console.log("Generator function first call",genObject.next()); //{value: 1, done: false}
console.log("Generator function second call",genObject.next()); //{value: 2, done: false}
console.log("Generator function third call",genObject.next()); //{value: 3, done: false}
console.log("Generator function fourth call",genObject.next()); //{value: undefined, done: true}


// 10) Function as an constructor and its methods call , apply and bind

function Person(firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}   

const person3 = new Person("Manoj" , "Kumar" , 26);
const person4 = new Person("Kumar" , "Sanu" , 29);

console.log("Person 3",person3);
console.log("Person 4",person4);
console.log("Person 3 Full Name",person3.fullName());
console.log("Person 4 Full Name",person4.fullName());

// now how to use the methods that are call , apply and bind
// which are used to set the vaue of the this keyword

function greet(greetingMessage , date){
    console.log(`${greetingMessage} , My name is ${this.firstName} ${this.lastName} and today is ${date}`);
}

//call method
greet.call(person3 , "Good Morning" , "10th June 2025");


// apply method
// it will take the other argumenst in the array format 
greet.apply(person4 , ["Good Evening" , "10th July 2025"]);

//bind method 
// it will also take the first parameter that is the value of this keyword and then other arguments in the quama spearated 
//but it will return the one function that I have to call to get the output

const bindFunction = greet.bind(person3 , "Good Night" , "10th August 2025");
bindFunction();


// prmises
// it is used to handle the asynchronous operations in javascript 
// promises in the javascript are re-present the eventual compiletion (or failure) of the asynchronous operation and its resulting value

// it is having the four states 
// 1) pending : initial state , neither fulfilled nor rejected 
// 2) fulfilled : meaning that the operation completed successfully 
// 3) rejected : meaning that the operation failed
// 4)resolved : meaning that the promise is resolved 


// Note : Creating the promise is synchronous but consuming or handling the  the promise is asynchronous

const promise1 = new Promise((resolve , reject) => {
    // some asynchronous operation
    setTimeout(() => {
        resolve("Promise resolved successfully");
    } , 5000);
});

console.log("Promise 1",promise1); //Promise {<pending>}

// now to handle or consume the promise we have two methods 
// 1) then() method : it will be called when the promise is resolved 
// 2) catch() method : it will be called when the promise is rejected

//and the second approach is using the async and await keywords

promise1.then((value) =>{
    console.log("Promise 1 resolved");
    console.log(value); //here the value is the mesage that I passed while resolving the promise 
}).catch((error) => {
    console.log("Promise 1 rejected");
});



// Now lets resolve the one promise using the async and await keywords
//using the fetch API to get the data from the server

const fetchData = async () => {

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Fetched Data using async and await",data);
    }catch(error){
        console.log("Error while fetching the data",error);
    }
}

fetchData();



//now using the axios library to fetch the data from the server

const fetchDataUsingAxios = async () => {
    try{    
        // when we fetch the data using axios it will return the data in the javascript object itself so I do not have to use json() method to convert the data into the javascript object
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("Fetched Data using axios",response.data);
    }catch(error){
        console.log("Error while fetching the data using axios",error);
    }
}

fetchDataUsingAxios();