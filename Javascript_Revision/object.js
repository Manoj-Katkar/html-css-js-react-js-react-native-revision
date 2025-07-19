// !Constructor : it is used to create objects 
// !New : it is the keyword to create the new object 


// ^ below is the literal way for creating the objects 

let obj3 = {
    name : "Manoj",
    age : 23
}

obj3.name = "Virat";
obj3.lastName = "kacha picha";

console.log(obj3);

// !creating using the constructor 
// *Better way use the first character capital so it will understand it is constructor 


function Details(name , age){
    // *here this will represent the current object that is person for which it is called after new keyword 
    this.userName = name;
    this.userAge = age ;

}

let person1 = new Details("Ravi" , 31);

console.log(person1);

let person2 = new Details("Macha" , 40);

console.log(person2);

console.log(Details("Manya" , 21));  //* here it will be considered as function 


// ! Notes :
/**
 * *Constructor : 
 * *         Constructors are special types of functions used to create the objects 
 * * Above Are the Examples 
 */
  



// ~Another Exapmle to get the products using the constructors 
//  *using the constructor I have to create the 5 Objects that will represent the products 


function Products(productName  , price , rating){
    this.productName = productName;
    this.price = price;
    this.rating;
}

// ^creating the products 

let product1 = new Products("I-Phone" , 100000 , 4.5);

let product2 = new Products("Samsung" , 1000 , 4);

let product3 = new Products("Dell" , 150000 , 4.7);

let product4 = new Products("Redmi" , 11000 , 4.8);

let product5 = new Products("MackBook" , 120000 , 4.9);


// ^ printing the product objects 

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);


let literal = {
    name : "Vijay Thalapathy",
    msg : 2500,
    completed : false,
    demo : function(){
        console.log("Khatam tata Bye Bye");
    },

    fruits : ["apple" , "Mango" , "lemon"]
}




// ! using the object constructor 

let objectConst = new Object();

console.log(objectConst);   //*this is empty object 

// ^ now adding the properties into it 
objectConst.name = "Dhoni";

console.log(objectConst);

// ! How to access the object 
// ^ there are two ways : 1) using dot(.)    
                    //  ^ 2) using square bracket (["here mension the value in String"])

console.log(literal.name);

console.log(literal["msg"]);



// ! How many ways we can provide the keys in the object 

let obj5 = {
    // ^for key we can store using the varaible , string , numbers (Total 3 ways are there )

    name : "Thala",
    "age" : 25,
    150000 : 2

}

console.log(obj5.name , obj5["name"]);
console.log(obj5.age  , obj5["age"]);

// ^ this is not accessible because it is Number format of the key 
// ! Note : if we storing the keys under the number then 
// !we have to use the only second way to access using the [] square bracket

// console.log(obj5.150000);   //*error

console.log(obj5[150000]);


// !Update the values of the keys of the object the use the same above 2 ways = dot and square bracket

obj5.name = "talavpali";
obj5.age = 22;

console.log(obj5);


// ^ How to delete the key value pair in javascript 
// *using inbuild method delete 

delete obj5["name"];           //!IMP 

console.log(obj5);

// *Adding the one property 

obj5.gender = "male";

console.log(obj5);


// ! To get the All the keys using the Object.keys()
// *it will return the Array of the all the keys 

console.log(Object.keys(obj5));        //return all keys in Array format 

// ! to get the all the values 

console.log(Object.values(obj5));    //return all values in Array format 


// ! if we want both keys and values  in two dimensional Array 

console.log(Object.entries(obj5));



// !if we want to freezz some Object so no one  can change it 
// * here also I cannot able to add and also cannot able delete and also cannot 
// * modify the existing property 

// no one delete , no one can add keys 

Object.freeze(obj5);

obj5.lastName = "Kacha - Picha";  //this will not added 

delete obj5.age;

console.log(obj5);


// !seal() method 
// * here also I cannot able to add and also cannot able delete  but we can modify the existing property 

let obj6 = {
    name : "Manoj",
    age : 23
}

Object.seal(obj6);

// *All the frozen are seal but all seal are not frozen 

obj6.name = "Macha";

console.log(obj6);  


// ! two methods to check that object is sealed or Frozen
console.log(Object.isFrozen(obj6));
console.log(Object.isSealed(obj6));


// ^Notes
// to get the All the keys of the object in the Array format 
// Object.keys();           //*return All keys in Array format 
// Object.values();         //*return All values in Array format 
// Object.entries();        //*return All keys and values in 2D Array format 
// Object.freeze();         //*it will freeze the Object (Not able to change the values of the keys also)
// Object.seal();           //*it will seal the Object (we can able to change the values of the keys in seal)
// Object.isFrozen();       //* here it will check whether the Object if frezze or Not  (return the boolean values)
// Object.isSealed();        //* here it will check whether the Object if sealed or Not 

// ! IMP Note : All Frozen Objects Are sealed but vice-versa it is Not 




// ! How to merge Two Objects in Javascript 

let demo1 = {
    name : "Kacha-picha",
    age : 21
}

let demo2 = {
    name : "papu",
    age : 50,
    trophies : 22

}

// ^ Using the assign() method we can merge the both the Object 
// ~Assigning the demo2 properties to the demo1 

// Object.assign(demo1 , demo2);

// console.log(demo1);

// *Spread Operator : it is used to copy the elements (it will create the one object )
// console.log({...demo1 , ...demo2});   //* it will not modify the original Object 

let mergedObject  = {...demo1 , ...demo2};

console.log(mergedObject);

console.log(demo1);


// !Object Destructuring : (VIMP Topic)
/**
 * * {} = it will represent the Object Destructuring
 * * [] = it will represent the Array Destructuring
 */


let food = {
    name:"biryani",
    type : "chicken",
    price : 180
}

let {name , type , price} = food;

console.log(food.name);

// ^ without using the dot operator

console.log(name);