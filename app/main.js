var fs = require("fs");

// BLOCKING (Synchronous)
//var data = fs.readFileSync('input.txt');
//console.log(data.toString());

// NON-BLOCKING (Asynchronous)
fs.readFile('input.txt', function(err, data) {
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("Program Ended");