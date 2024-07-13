//Set up our own event with variable 
// by requiring event module
const EventEmitter = require('events');

//Create instance of our class/ object
const customEmitter = new EventEmitter();

//Register a listener(callback function) for 'response'(event name)
customEmitter.on('response',() =>{
    //once the event takes place, this is what we want to happen
    console.log(`data received`)
})

//triggers event with name timer and passes in data to be console.log'ed
setInterval(() => {
    customEmitter.emit("timer","What's going on?");
},2000);

//Register timer event with cb
customEmitter.on("timer", (msg) => console.log(msg));

//Use emit method to trigger the event with the name 'response'
customEmitter.emit('response')