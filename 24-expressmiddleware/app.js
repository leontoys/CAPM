const express = require('express');
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

//middle for static web content
app.use("/",express.static("webapp/"));

//the default response
app.get('/',(request,response)=>{
    response.send('Sever says hello');
});

//pass vendors
app.get('/vendors',(request,response)=>{
    response.json(this.vendors);
});

//api to get the specific vendor
app.get('/vendors/:id',(request,response)=>{
    //response.send(request.params.id);
    const foundVendor = this.vendors.find(function(element){
        return element.id == request.params.id;
    });
    response.send(foundVendor);
});

//post request
app.use(express.json()); //todo
app.post('vendors',(request,response)=>{
    //const postRequestData = request.body;
    //postRequestData.id = Math.floor(Math.random() * 100);
    //response.json(postRequestData);
});

//get webapp
 app.get('/index.html',(request,response)=>{
    //response.json(__dirname);
    response.sendFile(__dirname+"/webapp/index.html");
});

/* We can't keep serving all files one by one - so we need to use middleware
app.get('/index.html',(request,response)=>{
    //response.json(__dirname);
    response.sendFile(__dirname+"/webapp/index.html");
}); */


app.listen(3001);