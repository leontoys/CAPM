var aFruits = ["Apple","Banana","Cherry"];
var aCities = ["Adelaide","Barcelona","Chicago"];

var printArray = function(arrayParameter){
    for (let index = 0; index < arrayParameter.length; index++) {
        const element = arrayParameter[index];
        console.log(element);
    }
}

printArray(aFruits);
printArray(aCities);


console.log("---Reuseable functions---");
var myReuse = require("./resuse");
myReuse.printArrayReuse(aFruits);
myReuse.getCount(aCities);

this.tax = 30 //this global variable can be accessed by arrow functions
//but not by normal functions

var addTwoNumbers = function(a,b){
    return a+b+this.tax;
};
console.log(addTwoNumbers(10,20));

addTwoNumbersArrow = (a,b) =>{
    return a+b+this.tax;
}
console.log(addTwoNumbersArrow(10,20));