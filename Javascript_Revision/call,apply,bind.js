// ! create the 4 object using constructor 
// ^ it should have two properties name and age 

// !using constructor
function Person(name , age){
    this.userName = name;
    this.age = age;
}


// ^ creating the 4 objects 

let person1 = new Person("Manoj" , 23);
let person2 = new Person("Raj" , 20);
let person3 = new Person("Sagar" , 19);
let person4 = new Person("Mahi" , 24);

// !using literal way 
let person5 = {
    userName : "Sachin",
    age : 50
}
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

console.log(person5);


// ! Now I want the Manoj 
console.log(`Hi , ${person1.userName}`);

// ^ lets create the one function for greetings 

function greetings(){
    // !here function is created under the window object 
    // ^to change the this keyword value pass that in the call method 
    // console.log(`Hi , ${this}`);
    console.log(`Hi , ${this.userName} and his age is ${this.age}`);
}

//& by using one function I have to refer the multiple users then I have to use the function methods 

//! call() : to refer the differant differant object we use the call() method it will assign the new value to the this keyword 


greetings.call();  //*here undefined because windowObject.userName is undefined it is not declared inside the window hence getting the undefined

greetings.call(person5);

greetings.call(person1);


// !Question 
// create the 2 object 
// product name is this and price is this 

function Product(name , price){
    this.productName = name;
    this.price = price;
}


// create the two objects 
let product1 = new Product("I-Phone" , 120000);
let product2 = new Product("Samsung Galaxy" , 10000);


function productDetails(rating , condition){
    console.log(`product Name is ${this.productName} and its price is ${this.price}
                 And its rating is ${rating}
                 its condition is ${condition}`);
}

// !Now use the call method to access the product details for each product 
productDetails.call();  //*undefined it will represent because in window object there is no variables with Name productName and price 

productDetails.call(product1);
productDetails.call(product2);


productDetails.call();  //*it will represent undefined because by default there is window object is getting passed within the call method 






// apply() : it will accept the more argument that is this keyword referance  and other parameters 
console.log("---------------------apply()--------------------------");

productDetails.apply();

// productDetails.apply(product1 , 4.5);  //*Error 



console.log("using call method");

productDetails.call(product1 , 4.5 , "its bad condition");  //takes more than one argument individually 

console.log("using apply method");

productDetails.apply(product2 , [4.5 , "very-good"]);  //*Argument in the form of the Array 




// !Note :
/**
**      call() :  will accept the arguments individually 
**     apply() :  will accept the arguments in the form of the Array 

 */

// !Lets Understand it with one More Example 

let details1 = { 
    name : "shirt",
    price : 1500
}

let details2 = { 
    name : "T-shirt",
    price : 1700
}

// create the one function for the accessing the differant differant objects properties 

function allDetailsOfProduct(shop , place){
    console.log(`I purchased a ${this.name} 
        from ${shop} 
        it is located at ${place} 
        it costs ${this.price}`);
}

// !Now access the call details using the call method 


allDetailsOfProduct.call(details1 , "Grace-7" , "Thane");           //*direct passing parameters

allDetailsOfProduct.apply(details2 , ["Q-spider" , "Mumbai"]);  //*passing the parameters in the Array format 


// !bind() : it will create the New Function we have to call the new function then only it will get executed 
//! otherwise it will not get executed 

allDetailsOfProduct.bind();  //*not execute the function 


let bindFunction = allDetailsOfProduct.bind(details1 , "new-Style" , "CST");

console.log("---------------------Using bind() which returns the one new Function --------------------");


bindFunction();   //* in this way we have to call the function that will returned by the bind method 




// ^Notes
//! learned about the function method inbuilt that are call , apply , bind
/*
& call() : 
*        1)it will call the function with provided this value 
*         2) it will accept the arguments as individual values 
    ?Syntax: 
^           functionName.call(this argument (referance object) , arg1 , arg2 , ....);

& apply() : 
*      1)it will call the function with provided this value 
*       2)it will accept the first argument this value as referance object and all other 
*         arguments in the Array format 

    ?Syntax: 
^           functionName.apply(this argument (referance object) , arg1 , arg2 , ....);

      
& bind():
*     1) it will set the new Function with provided this value set means create 
*     2) and it will accept the arguments individually 

    ?Syntax: 
^          let functionByBind =  functionName.bind(this argument (referance object) , arg1 , arg2 , ....);
^           functionByBind();   //here it will get executed 
**/