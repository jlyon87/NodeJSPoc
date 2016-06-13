// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create a connection Event Handler
var connectHandler = function connected() {
	console.log('connection successful');

	// Fire the data_received event
	eventEmitter.emit('data_received');
}

// Create a data_received Event Handler
var dataHandler = function received() {
	console.log('data received successully');
}

var listener1 = function listener1() {
	console.log('listener1 executed');
}

var listener2 = function listener2() {
	console.log('listener2 executed');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with a datahandler
eventEmitter.on('data_received', dataHandler);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "Listner(s) listening to connection event");

// Bind the data_received event with an anonymous function
/*eventEmitter.on('data_received', function() {
	console.log('data received successfully');
});*/

// Fire the connection event
eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 will not listen now.');

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "Listner(s) listening to connection event");

console.log("Program Ended");