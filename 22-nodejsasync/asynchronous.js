//functions are called in the sequnce they are called and
//not in the sequence they are defined
myDisplayer = (parameter) => {
    console.log(parameter);
}

myFirst = () => {
    myDisplayer("Hello");
}
mySecond = () =>{
    myDisplayer("Goodbye");
}
mySecond();
myFirst();  


//callback
myCalculator = (number1,number2,callbackFunction) => {
    let sum = number1 + number2 ;
    callbackFunction(sum);
}
myCalculator(5,5,myDisplayer);

//remove negative numbers using call back 
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Keep only positive numbers
//function 
//arrow functions must be defined before they are used
const removeNeg = (numbers, callback) => {
    const myArray = [];
    for (const x of numbers) {
      if (callback(x)) {
        myArray.push(x);
      }
    }
    return myArray;
  }

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

myDisplayer(posNumbers);

//call back - asynchronous
setTimeout(() => {
   myDisplayer("Hello I am call back") 
}, 5000);

/* //set interval - cool 
setInterval(() => {
    let myDate = new Date();
    console.log(myDate.getHours(),":",myDate.getMinutes(),":",myDate.getSeconds());
}, 1000); */

//call backs are old - Now replaced with Promises
let myPromise = new Promise(){
    
}