// All about the asynchornous Programming 

// setTimeout(() => {
//     console.log("Hi I am Manoj");
// } , 3000);



let money = 10;

// let intervalId = setInterval(() => {
//     console.log(`I have this much ${money} Rs`);
//     money++;
//     //now if I want to stop the interval 
//     if(money === 15){
//         clearInterval(intervalId);   //*to stop the setInterval 
//     }
// } , 2000)



//!lets create some promises 

// let promise1 = new Promise((resolve , reject) => {
//     //now I will resolve promise after the 3 seconds 
//     setTimeout(() => {
//         resolve("Recived Data from the Backend");
//         // reject("Cannot able to load Data error");
//         console.log(promise1);   //now it got resolved and also got fullfilled 
//     } , 3000);
// })

// console.log(promise1);  //initial state will be pending 

//now handling the promises is Asynchronous 
// using the then and catch 

// promise1
//         .then((result) => {
//             console.log(result);
//         })
//         .catch((error) => {
//             console.log(error);
//         })





        
//!Now Handling the promises using the async and await keyword    



let asynchronousFunctionForWeatherData = async (cityName) => {

    //! so for the below code if I will get the error then it will not work for that I have to implement the try and catch block
    //now lets fetch the data from the server of the weatherApi 

    const url = `https://api.weatherapi.com/v1/current.json?key=f862b7c16bcc4a2cb37182113242506&q=${cityName}&aqi=no`;  //*get request 

    console.log(url);

    let dataFromServerInJsonFormat = await fetch(url);

    console.log(dataFromServerInJsonFormat);   //this data is there in the format of the JSON I have to convert it into the javascript object 

    //so I will Have the two options 
    // 1)use dataFromServerInJsonFormat.json() //*this is asynchronous 
    // 2) use JSON.parse(dataFromServerInJsonFormat);   //*this is synchronous 
    // await will execute that promise in the synchronous manner and if that promise got resolved the we will get its resolved message and for error I have to implement the try and catch block 

    let actualDataInJavascriptFormat =  await  dataFromServerInJsonFormat.json();

    console.log(actualDataInJavascriptFormat);


}

asynchronousFunctionForWeatherData("Chennai");