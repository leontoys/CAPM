//import events
let events = require('events');

let liyon = new events.EventEmitter();

liyon.on("speak",()=>{
    console.log("Liyon is speaking");
});

liyon.emit('speak');