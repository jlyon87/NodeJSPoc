var buf = new Buffer(256);
var len = buf.write('Simply Easy Learning.');

console.log("Octets written : " + len);

buf = new Buffer(26);
for(var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

// READING FROM BUFFERS
console.log( buf.toString('ascii') );			// outputs a-z
console.log( buf.toString('ascii', 0, 5) );		// outputs abcde
console.log( buf.toString('utf8', 0, 5) );		// outputs abcde
console.log( buf.toString(undefined, 0, 5) );	// defaults to ascii - outputs abcde

// CONVERTING BUFFER TO JSON
buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

// CONCAT BUFFERS
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content: " + buffer3.toString());