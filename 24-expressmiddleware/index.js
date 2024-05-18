const express = require('express');
const app = express();

app.get('/',(request,response)=>{
    response.send('Welcome to Express Middleware World');
})

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

app.listen(3000);