// ! We will get the promise when we are fetching the data from the server hence the handling the promise is more important 
// ^ Hadling the prmise is more important 

// promise is having 3 stages 
/**
 * *pending              (by default stage)
 * *resolved 
 * *rejected
 * 
 * *promise will accept the one call back function that call back will accept the two arguments resolve and reject and those arguments also one call back 
 * 
 * !creating the promise is Synchronous 
 * ! and handling the promise is Asynchronous  (very IMP)
 */

// console.log("hi");
// let promise1 = new Promise((resolve , reject) => {
//     console.log("hello");

//     let a = 0;

//     if(a){
//         resolve(a);
//     }
//     else{
//         reject();
//     }
// });


// console.log("bye");

// console.log(promise1);



// !How to handle the promise 
/**
 * *we can handle the promise using the then() and catch() method 
 */

// promise1.then((result) => {
//     console.log("promise resolved" , result);
// }).catch(() => {
//     console.log("promise failed");
// });




// !Another Example 


// let propose = new Promise((accepted , rejected) => {
//     console.log("will you marry me ?");

//     let decision = Math.round(Math.random());

//     console.log(decision);

//     if(decision){
//         accepted("proposal Accepted");
//     }
//     else{
//         rejected("you will get better one focus on study");
//     }
// });


// console.log(propose);


// ! Now lets handle the promise of the proposal 

// propose.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


// ! real use case of the promises

// ^ to get the data from the server we have to use fetch() function 

// let dataFromServer =  fetch("https://www.shoppersstack.com/shopping/products/alpha");


// console.log(dataFromServer);   //*this is promise in the pending stage 


// dataFromServer.then((result) => {        // * result is nothing but an object that we will get when the promise will get resolved 
//     console.log("I got the response" , result)

//     //! we will get the data in the form of the string we have to convert that data in javascript format hence j son will used 
//     //! and again this data will be converted in the form of the promise only 

//     let convertedDataPromise = result.json();     //*data will converted from the server 
//     console.log(convertedDataPromise);


//     // *now I have to handle the above promise 
//     convertedDataPromise.then((data) => {
//         console.log(data);

//         // *we will get the data in the form of the Array 
//         let objectFormatData = data;
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// })
// .catch((error) => {
//     console.log("getting the error " ,error);
// })





// !status = 200 means it is success 



// !Handling the promises using the async and await 

/**
 * *if you are providing the async keyword then only we can use await keyword 
 */


async function muthu(){

    try{

        let dataFromServer = await fetch("https://www.shoppersstack.com/shopping/products/alpha");


        console.log(dataFromServer);   //*this is data which is in promise form only 
    
    
        // Now I have to convert the data in j son format 
    
        let convertedDataPromise = await dataFromServer.json();
    
        console.log(convertedDataPromise);

    }
    catch(error){
        console.log(error);
    }


}


// call the above function
muthu();


// !if I have to handle the error inside the async and await then I can handle it using the try and catch 