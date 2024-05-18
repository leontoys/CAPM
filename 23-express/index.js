console.log("Hello World");

const express = require('express');
const app = express();

app.get('/',(request,response)=>{
    response.send('Hello Web Server World');
});

app.get('/vendors',(request,response)=>{
    response.json({
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
    });
});

//create new end point /vendor:id and check
///if there is a vendor and pass that single record

app.listen(3000);