// ! All About the Objects in Javascript 
// How Many Ways we can create the objects in the javascript?
// All Methods that are there for the objects in javascript 
// All object copies with its advantage and dis-advantage 

// Ways to create the objects in javascript 
// !1. Object Literal

let person1 = {
    name: "Manoj",
    age: 25,
    isMarried: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "Pune",
        state: "Maharashtra"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log("person1 : " , person1);



// !2. Using the Object Constructor
let person2 = new Object();

console.log("person2 : " , person2);  //^ it will re-present the empty object 

//now if I wanted to ad the key and value pairs to it then 

person2.name = "Kiyansh";


console.log("person2 after adding name : " , person2); //^ it will re-present the object with the key and value pairs


//! 3. Using the Function As Constructor
// Constructor :  Constructors are special types of functions used to create the objects and initialize their properties like classes in other programming languages.


function Car(make , model , manufactureYear , carOwner) {
    this.make = make;
    this.model = model;
    this.manufactureYear = manufactureYear;
    this.carOwner = carOwner;
}

let car1 = new Car("Toyota", "Corolla", 2020, "Manoj");
let car2 = new Car("Roles Royce", "Phantom", 2022, "Sagar");
let car3 = new Car("BMW", "X5", 2021, "Kiyansh");

console.log("car1 : " , car1);
console.log("car2 : " , car2);
console.log("car3 : " , car3);


// ! How to access the properties of the object?
console.log("Car1 Model : " , car1.model); //^ Accessing the model
console.log("Car1 Model : " , car1["model"]); //^ Accessing the model


// !4. Using Object.create() Method
let person3 = Object.create(person1); //^ person3 will inherit properties and methods from person1 object

console.log(person3);

person3.name = "Sagar"; //^ Adding a new property to person3
console.log("person3 : " , person3); //^ person3 will have its own properties and also inherit properties from person1

person3.greet();
console.log(person3.hobbies); //^ person3 will inherit hobbies from person1




// !5. Using ES6 Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
let dog = new Animal("Buddy", "Dog");
let cat = new Animal("Whiskers", "Cat");

console.log("dog : " , dog);
dog.makeSound();
// console.log(dog.makeSound()); //^ Calling the method from the class




//! All Object Methods 
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

// I will be crete the one object 

const myCar = {
    name: "Tesla",
    model: "Model S",   
    manufactureYear: 2025,
    owner: "Manoj",
    start: function() {
        console.log(`${this.name} ${this.model} is starting.`);
    },
    stop: function() {
        console.log(`${this.name} ${this.model} is stopping.`);
    }
}


const allKeysArray = Object.keys(myCar); //^ Getting all keys of the object in Array format
console.log("All Keys of myCar : ", allKeysArray);

const allValuesArray = Object.values(myCar); //^ Getting all values of the object in Array format
console.log("All Values of myCar : ", allValuesArray);

//now to get the all the keys and as well as the values 
const keysAndValues2DArray = Object.entries(myCar); //^ Getting all keys and values of the object in 2D Array format
console.log("All Keys and Values of myCar : ", keysAndValues2DArray);

// Now when I wanted to freeze the object then I will use the Object.freeze() method
Object.freeze(myCar); //^ Freezing the myCar object


// !when the object is freeze then cannot able to add the new key property in it 
myCar.importedYear = 2024; //^ Trying to change the property of the frozen object
console.log("After trying to change the frozen object : ", myCar); //^ It will not change the object as it is frozen

// !when the object is freeze then also connot able to update the value of the particular key 
myCar.name = "Tesla Model X"; //^ Trying to change the name property of the frozen object
console.log("After trying to change the name of the frozen object : ", myCar); //^ It will not change the name property as it is frozen



// !when the object is freeze then also connot able to delete the key property in it
delete myCar.model; //^ Trying to delete the model property of the frozen object
console.log("After trying to delete the model of the frozen object : ", myCar); //^ It will not delete the model property as it is frozen


// !Now when I wanted to seal the object then I will use the Object.seal() method

// taking the another object to seal it
let myBike = {
    name: "Yamaha",
    model: "FZ",
    manufactureYear: 2023,
    owner: "Kiyansh",
    start: function() {
        console.log(`${this.name} ${this.model} is starting.`);
    },
    stop: function() {
        console.log(`${this.name} ${this.model} is stopping.`);
    }
}
console.log("myBike : ", myBike);
// Sealing the myBike object
Object.seal(myBike);

// I will try to add the new key property in it
// !we cannot able to add the new key property in the sealed object but we can update the existing key property value in it 
myBike.importedYear = 2022; //^ Trying to add a new property to the sealed object
console.log("After trying to add a new property to the sealed object : ", myBike); //^ It will not add the new property as it is sealed


// know updating the existing key with new value in it
myBike.owner = "Manoj"; //^ Trying to update the owner property of the sealed object
console.log("After trying to update the owner of the sealed object : ", myBike); //^ It will update the owner property as it is sealed


// !if I wanted to check my object is freeze or not then I will use the Object.isFrozen() method
console.log("Is MyCar frozen? ", Object.isFrozen(myCar)); //^ It will return true as myCar is frozen
console.log("Is MyBike frozen? ", Object.isFrozen(myBike)); //^ It will return false as myBike is not frozen


// !if I wanted to check my object is sealed or not then I will use the Object.isSealed() method
console.log("Is MyCar sealed? ", Object.isSealed(myCar)); //^ It will return true as myCar is not sealed
console.log("Is MyBike sealed? ", Object.isSealed(myBike)); //^ It will return true as myBike is sealed


//!   Note : All the frozen objects are sealed but vice-versa it is not true.




// !HOw to merge the objects in javascript?
// Using the Object.assign() method to merge two objects
// Note : 
    //   i) When the Two same objects with same key and value will get merged using the Object.assign() method or using the spread operator then the merged object will have the all keys updated with the last object that is second object that we are passing while merging the objects.
//  ii) If the two objects have different keys then the merged object will have all the keys from both the objects and the values will be updated with the last object that is second object that we are passing while merging the objects.

let myCar2 = {
    name: "Tesla",
    model: "Model 3",
    manufactureYear: 2024,
    owner: "Manoj",
    start: function() {
        console.log(`${this.name} ${this.model} is starting.`);
    },
    stop: function() {
        console.log(`${this.name} ${this.model} is stopping.`);
    }
}


let myBike2 = {
    name: "BMW",
    model: "S1000RR",
    manufactureYear: 2023,
    owner: "Kiyansh",
    importedYear: 2022, //^ Adding a new key property to the myBike2 object
    DesignedBy: "BMW North Corea", //^ Adding another new key property to the myBike2 object
    start: function() {
        console.log(`${this.name} ${this.model} is starting.`);
    },
    stop: function() {
        console.log(`${this.name} ${this.model} is stopping.`);
    }
}

// Merging the two objects
let mergedObject1 = Object.assign(myCar2 , myBike2);
console.log("Merged Object : ", mergedObject1); //^ It will merge the two objects and return the new object

// 1Now lets merge the two object using the spread operator 
let mergedObject2 = {...myCar2, ...myBike2};
console.log("Merged Object using Spread Operator : ", mergedObject2); //^ It will merge the two objects and return the new object




// Now lets see the all the copies of the object in javascript
// Total we are having the 4 copies of the object in javascript
// 1) value copy
// 2) reference copy
// 3) shallow copy
// 4) deep copy


// !1. Value Copy

let num1 = 20;
let num2 = num1; //^ This is a value copy, num2 will have the value of num1

num1 = 30; //^ Changing the value of num1 it will not affect the num2 value

console.log("num1 : ", num1); //^ num1 will  have the new value
console.log("num2 : ", num2); //^ num2 will have the old value


// !2. Reference Copy

const object1 = {
    name: "Manoj",
    age: 25,
    hobbies: ["reading", "coding"],
    play: function() {
        console.log(`${this.name} is playing.`);
    },
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}

const object2 = object1; //^ This is a reference copy, object2 will have the reference of object1

// Now I will print the both the objects 
console.log("object1 : ", object1); //^ It will print the object1
console.log("object2 : ", object2); //^ It will print the object2 which is same as object1



// Now I will change the object1 properties
object1.name = "Kiyansh"; //^ Changing the name property of object1 

// Now when I change the value of the object 1 key that is name to kiyansh so that wil get the changed for the object 2 also 
// let me print the both objects and show it to you 
console.log("After changing the name property of object1 : ");
console.log("object1 : ", object1); //^ It will print the object1 with the new name
console.log("object2 : ", object2); //^ It will print the object2 with the new name as it is a reference copy


// !so to handle the above issue we can use the shallow copy 
// !3. Shallow Copy
// how to create the shallow copy of the object in javascript?
// ! We can creat ethe shallow copy using the spread operator 

let shallowCopyOfObject1 = {...object1}; //^ Creating a shallow copy of object1 using spread operator
console.log("shallowCopyOfObject1 : ", shallowCopyOfObject1); //^ It will print the shallow copy of object1
console.log("object1 : ", object1); //^ It will print the object1


// Now I will update the one level of values of the object 1 but it will not get changed to the shallow copy of the object1
object1.name = "Sagar"; //^ Changing the name property of object1 to Sagar
console.log("After changing the name property of object1 to Sagar : ");
console.log("object1 : ", object1); //^ It will print the object1 with the new name
console.log("shallowCopyOfObject1 : ", shallowCopyOfObject1); //^ It will print the shallow copy of object1 with the old name as it is a Kiyansh and it will not get changed as it is a shallow copy

// !Now why the name that I have updated for the object1 is not got changed to the shallow copy of the object1? 
// because when I am creating the shallow copy using the spread operator it will create the another object in the heap memory so it will have the differnt address hence it is not getting changed 
// !but is I change the values of the two level down object with its new values for particular keys like in object1 adddress then it will get changed to bot that is for shallow copy of object1 and the original object1

object1.address.city = "Mumbai"; //^ Changing the city property of object1 address to Mumbai
console.log("After changing the city property of object1 address to Mumbai : ");
console.log("object1 : ", object1); //^ It will print the object1 with the new city
console.log("shallowCopyOfObject1 : ", shallowCopyOfObject1); //^ It will also get updated for the nested objects with new value for the key city  


// !so to restrict the above behaviour we can use the deep copy
// !4. Deep Copy
// how to create the deep copy of the object in javascript?
// ! We can creat the deep copy using the  JSON.stringify() and JSON.parse() methods


// so now for the nested objects also have the different addressin heap memory 

let objectInString = JSON.stringify(object1); //^ Converting the object1 to string format

let deepCopyOfObject1 = JSON.parse(objectInString); //^ Parsing the string to create a deep copy of object1

console.log("deepCopyOfObject1 : ", deepCopyOfObject1); //^ It will print the deep copy of object1
console.log("object1 : ", object1); //^ It will print the object1 

// Now I will update the nested object of the object1 that will not affect the deep copy of the object1
object1.address.city = "Delhi"; //^ Changing the city property of object1 address to Delhi
console.log("After changing the city property of object1 address to Delhi : ");
console.log("object1 : ", object1); //^ It will print the object1 with the new city
console.log("deepCopyOfObject1 : ", deepCopyOfObject1); //it will not get affected here the city will be mumbai only 

// Note : so in this way we can achive the functionality that if I am changing the values of any object that should not get affected to another object