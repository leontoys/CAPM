
  const myservicedemo = function(service){
    service.on('myFunction',(request,response)=>{
      return 'Hello' + request.data.msg
    });
  }

  module.exports = myservicedemo;