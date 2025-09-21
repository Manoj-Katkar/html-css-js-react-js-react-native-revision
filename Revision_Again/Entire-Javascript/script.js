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