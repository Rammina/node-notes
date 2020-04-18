// const http = require("http");
// const url = require("url");
// const fs = require("fs");
const events = require("events");

var eventEmitter = new events.EventEmitter(); //creates a new eventEmitter object?

//Create an event handler:
var myEventHandler = function() {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");
