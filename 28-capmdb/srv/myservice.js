const myFunction = function(params) {
    
    //events
    params.on('greetings',(request,response)=>{
        return 'hello '+request.data.message;
    });

}

module.exports = myFunction;