//import events
let events = require('events');

let liyon = new events.EventEmitter();

liyon.on("speak",()=>{
    console.log("Liyon is speaking");
});

liyon.emit('speak');

 //using utls
 let utils = require('util');

 let Person = function(name){
    this.name = name;
 }

 utils.inherits(Person,events.EventEmitter);

 let Alan = new Person("Alan");
 let Bob  = new Person("Bob");
 let people = [Alan,Bob];

 people.forEach(element => {
    element.on("talk",(msg)=>{
        console.log(element.name+" says "+msg)
    })
 });

 Alan.emit('talk','Good mornig');
 Bob.emit('talk','Good bye');