console.log('Hello Node js');

var y = "10";
console.log(y);
console.log(typeof(y));
console.log(typeof(parseInt(y)));

var aFruits = ['Apple','Banana','Cherry'];
console.log(aFruits);
console.log(aFruits[0]);
console.log(aFruits[aFruits.length-1]);
aFruits.push('Dates');
console.log(aFruits);
aFruits.splice(1,0,"Test");
console.log(aFruits);

for (let index = 0; index < aFruits.length; index++) {
    const element = aFruits[index];
    console.log(element);
}

var oEmployee = {
    "empId" : 123,
    "empName" : "Alan",
    "salary" : 1000,
    "currency" : "AUD"
}
console.log(oEmployee);
console.log(oEmployee.currency);
for (const key in oEmployee) {
    if (Object.hasOwnProperty.call(oEmployee, key)) {
        const element = oEmployee[key];
        console.log(element);
        
    }
}

//Object with multiple arrays
var oComplexJSON = {
    "employees" : [{
        "empId" : 123,
        "empName" : "Alan",
        "salary" : 1000,
        "currency" : "AUD"
    },
    {
        "empId" : 456,
        "empName" : "Bob",
        "salary" : 2000,
        "currency" : "AUD"
    }],
    "cities" : [{
        "city" : "Parramatta",
        "state" : "NSW",
    },{
        "city" : "Melbourne",
        "state" : "VIC",
    }
],
    "gender" : {
        "M" : "Male",
        "F" : "Female"
    }
}
console.log(oComplexJSON);
console.log(JSON.stringify(oComplexJSON));
const stringComplexJSON = JSON.stringify(oComplexJSON);
console.log(JSON.parse(stringComplexJSON));