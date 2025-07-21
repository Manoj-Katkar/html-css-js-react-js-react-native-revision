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