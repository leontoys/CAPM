//load express module
const express = require('express');
//create app
const app = express();

//just a vendor array
this.vendors = [{
    "id" : "1",
    "firstName" : "Tim",
    "lastName" : "Cook",
    "companyName" : "Apple",
    "website" : "www.apple.com",
    "emailId" : "tim.cook@apple.com",
    "gstNumber" : "3448492091"
},
{
    "id" : "2",
    "firstName" : "Larry",
    "lastName" : "Page",
    "companyName" : "Google",
    "website" : "www.google.com",
    "emailId" : "larry.page@apple.com",
    "gstNumber" : "8375616593"
},
{
    "id" : "3",
    "firstName" : "Mark",
    "lastName" : "Zuckerberg",
    "companyName" : "Meta",
    "website" : "www.facebook.com",
    "emailId" : "mark.zuck@facebook.com",
    "gstNumber" : "9712648391"
},
{
    "id" : "4",
    "firstName" : "Satya",
    "lastName" : "Nadella",
    "companyName" : "Microsoft",
    "website" : "www.microsoft.com",
    "emailId" : "satya.nadella@outlook.com",
    "gstNumber" : "7394710935"
}
];


//the default response
app.get('/',(request,response)=>{
    response.send('Sever says hello');
})

//api to get vendors
app.get('/vendors',(request,response)=>{
    console.log(this.vendors);
    response.json(this.vendors);
    console.log(__dirname);
});

/* //api to get the specific vendor
app.get('/vendors/:id',(request,response)=>{
    //response.send(request.params.id);
    //const foundVendor = this.vendors.find(function(element){
        return element.id == request.params.id;
    });
    //response.send(foundVendor); -- this has some problem needs to be checked later
/*     typeof(foundVendor) !== undefined? response.send(foundVendor):response.send({
    "Vendor not found "
    }); 
});*/

//POST request
//to do post request we need postman
//also we need middleware
//for now using the inbuilt middleware for express.js
/* app.use(express.json());

app.post("/vendors",(request,response)=>{
    const postRequestData = request.body;
    //response.send("hello");
    postRequestData.id = Math.floor(Math.random() * 100);
    response.json(postRequestData);
}); */

/* //add fiori app
app.get("index.html",(request,response)=>{
    console.log(__dirname);
    response.sendFile(__dirname+'/webapp/index.html');//we need to pass absolute path
}); */

//app listening to the port
app.listen(3000);