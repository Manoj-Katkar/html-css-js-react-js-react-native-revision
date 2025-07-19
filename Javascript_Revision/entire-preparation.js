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