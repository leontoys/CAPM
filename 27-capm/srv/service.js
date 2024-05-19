/* module.exports = (say)=>{
    demo.on ('hello', req => `Hello ${req.data.to}!`)
  } */

   const someRandomIdentifier = function(serviceParameter){

    serviceParameter.on('hello',(req,res)=>{
        return 'Hello '+ req.data.message;
    })

  }

  module.exports = someRandomIdentifier; 