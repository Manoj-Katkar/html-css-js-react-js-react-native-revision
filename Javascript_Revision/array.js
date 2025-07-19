// !All the revision about the arrays 
// ways to create the Arrtay in javascript 
// ÷there are total 4 ways are there that how we can create the array in javascript

// ÷1st using the literal way 
let arr = [1 , 2 , 3, 4, 5, 6, 7, 8, 9, 10];

console.log("arr : " , arr);

// 2 nd way is using the array constructor 
const arr2 = new Array("RCB", "CSK", "MI", "KKR", "DC", "SRH", "RR", "GT", "LSG");
console.log("arr2 : " , arr2);

// 3rd way is using the array.from method 
// note it. will accept the only string 

const array3 = Array.from("Manoj Katkar");
console.log("array3 : " , array3);

// 4 the way using the array.of method
//here I can pass the different types of elements that each will be treated as the different Array element 
const array4 = Array.of(1, "Manoj", true, null, undefined, {name: "Manoj Katkar"}, [1, 2, 3]);
console.log("array4 : " , array4);



//======== now All the array methods are there that we can use to manipulate the array ========
// that will modify the original array 

const array5 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("array5 : " , array5);

// push method 
// it will add the array element at the last of the array
array5.push("Manoj");

console.log( "array5 after push : " , array5);

// pop() method 
// that will remove the array element from the last index of the given array 

array5.pop();
console.log("array5 after pop : " , array5);

// shift() method 
// it will remove the array element from the start of the index 
array5.shift();
console.log("array5 after shift : " , array5);

// unshift() method
// it will add the array element at the start of the array index 
array5.unshift("Manoj Katkar");
console.log("array5 after unshift : " , array5);


// splice() method 
// it will add and remove the elements at the same time 
// the following arguments it accept 
// splice(starting_index from where you want to remove the array elements , count of the elements you wanted to remove , elements that I wanted to add from that particular index)
array5.splice(1 , 2 , "Hi" , "Welcome");

console.log(array5)

// sort() method
// by default it will sort the array elements in the to the increasing order according to the first character of the string\

const array6 = [
    "Manoj",
    "Katkar",
    "Rohit",
    "Sharma",
    "Virat",
    "Kohli",
    "MS",
    "Dhoni"         
]

array6.sort();
console.log("array6 after sort : " , array6);  //sorted the array in increasing order according to the first character of the each array element alphbaticallty 


const array7 = [50 , 89 ,45 ,7 , 58 ,12 , 32 , 45 , 17 , 19 , 800 , 900 ,785412, 1234567890];

// now I will use the default method to sort the array in the increasing order 
array7.sort();   //!it will sort the array element according to the first digit only 
console.log("array7 after sort : " , array7); // sorted the array in increasing order according to the first character of the each array element numerically


//Now I have to use the custom logic to sort the given array in the incresing order 
// importatnt points 
// sort method will take the another function as the argument becasue it is the higher order function
// that function will take two arguments and it will return the number
// first argument = A (that is second value)
// second argument = B (that is first value)

//if I wanted to sort the array ion the ascending order means in increasing order I have to return A- B
// and for descending order I have to return B - A

//!sorting in the increasing order
array7.sort((A , B) => {
    return (A - B);
});

console.log("array7 after sort in increasing order : " , array7); // sorted the array in increasing order numerically


// !sorting the array in the decresing order that is descending order

array7.sort((A , B) => {
    return (B - A);
});

console.log("array7 after sort in decreasing order : " , array7); // sorted the array in decreasing order numerically




// reverse() method
// it will reverse the array elements
array7.reverse();
console.log("array7 after reverse : " , array7); // reversed the array elements





// Now the methods that will not modify the original array but it will return the new array
// and also few methods that will not return anything 

//! 1st forEach() method

const ansArray = array7.forEach((currentElement , currentIndex , originalArray) => {
    // console.log("currentElement : " , currentElement);
    // console.log("currentIndex : " , currentIndex);
    // console.log("originalArray : " , originalArray);
    return (currentElement * 2
    );
});

console.log("ansArray : " , ansArray); // it will return undefined because forEach method will not return anything


//! 2nd map() method
const copyOfArray = array7.map((currentElement , currentIndex , originalArray) => {
    return (currentElement * 2);
});

console.log("copyOfArray : " , copyOfArray); // it will return the new array with the each element multiplied by 2


// 3rd filter method 
const filteredArray = array7.filter((currentElement , currentIndex , originalArray) => {
    // here we can use startsWith , endsWith , includes and many more methods to filter the array elements if it is string 

    if(currentElement % 10 == 0){
        return currentElement; // it will return the element if the condition is true
    }

});

console.log(filteredArray); // it will return the new array with the elements that are divisible by 10



// !now if I use the map istead of the filter method 
const filteredArrayUsingMap = array7.map((currentElement , currentIndex , originalArray) => {
    if(currentElement % 10 == 0){
        return currentElement; // it will return the element if the condition is true
    }

});

console.log(filteredArrayUsingMap); // it will return the new array with the elements that are divisible by 10 but it will also return the undefined for the elements that are not divisible by 10


// find() method 
// that will return the only first element which statisfies the condition

const fountElement = array7.find((currentElement , currentIndex , originalArray )=> {

    if(currentElement % 10 == 0){
        return currentElement; // it will return the element if the condition is true
    }
});

console.log(fountElement); // it will return the first element that is divisible by 10. //!ans will be 50 that is the first satisfied array element 



// reduce() method
// it will also return the single value 
// it is also the HOF but it will take 4 arguments
// 1st argument is the accumulator that will hold the value of the previous iteration
// 2nd argument is the current element that is being processed in the array
// 3rd argument is the current index of the array
// 4th argument is the original array that is being processed
//it will iterate from the left to right of the array
//if we not pass the accumnator value then it will take the first element of the array as the accumulator value
// and teh current element will be starting from the first index of the array

const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfArrayElements = array8.reduce((accumulator, currentElement, currentIndex, originalArray) => {
    return (accumulator + currentElement);
} , 0);

console.log("sumOfArrayElements : " , sumOfArrayElements); // it will return the sum of all the elements of the array that is 55


// now same reduceRight() method 
// everything is same just it will iterate over the array from right to left 
const multiplicationOfArrayElements = array8.reduceRight((accumalater_value , currentElement , currentIndex , originalArray) => {
    return (accumalater_value * currentElement);
}  , 1);

console.log("multiplicationOfArrayElements : " , multiplicationOfArrayElements); // it will return the multiplication of all the elements of the array that is 3628800


// some() method 
// it will return true if at least one element of the array satisfies the condition

const isAnyElementDivisibleBy5 = array8.some((currentElement, currentIndex, originalArray) => {
    if(currentElement % 5 == 0){
        // console.log("currentElement : " , currentElement); // it will log the current element that is being processed
        // console.log("currentIndex : " , currentIndex); // it will log the current
        return true; // it will return true if the condition is satisfied
    }
});

console.log("isAnyElementDivisibleBy5 : " , isAnyElementDivisibleBy5); // it will return true if at least one element is divisible by 5


// every() method 
// ÷it will return true if all the elements satisfies the condition else it will return the flase 
const ifAllElementsGreaterThan5 = array8.every((currentElement , currentIndex , originalArray) => {
    if(currentElement > 5){
        return true; // it will return true if the condition is satisfied
    }
});

console.log("ifAllElementsGreaterThan5 : " , ifAllElementsGreaterThan5); // it will return true if all elements are greater than 5

// !how to convert the array into the string 
// 1st way using the toString() method
// 2nd way using the join() method


const newString = array8.toString();   //!it convert the array as it is into string 
console.log("newString : " ,  newString); // it will return the string of the
console.log("typeOf newString : " , typeof newString); // it will return the string of the


// ! but using the join method the quama will get separated by the given string
const newStringUsingJoin = array8.join(""); // it will join the array elements
console.log("newStringUsingJoin : " , newStringUsingJoin); // it will return the string of the array elements separated by the given string " - "


// !how to mege the two arrays 
// using the concat() method
const array9 = [11, 12, 13, 14, 15 ];
const mergedArray = array8.concat(array9); // it will merge the two arrays
console.log("mergedArray : " , mergedArray); // it will return the merged array of array8 and array9
console.log("typeOf mergedArray : " , typeof mergedArray);


//!also using the spread operator we can do it 
const mergedArrayUsingSpread = [...array8, ...array9]; // it will merge the two arrays using the spread operator
console.log("mergedArrayUsingSpread : " , mergedArrayUsingSpread); // it will return the merged array of array8 and array9
console.log("typeOf mergedArrayUsingSpread : " , typeof mergedArrayUsingSpread); // it will return the object because array is also an object