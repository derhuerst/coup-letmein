#!/usr/bin/env node

var http = require('http');



var req = http.request({
	'host':		'192.168.2.56',
	'path':		'/letmein'
});

req.on('socket', function (socket) {
	socket.setTimeout(3000, function() {
		req.abort();
	});
});

req.on('error', function (err) {
	process.stderr.write('An `' + err.code + '` error occured.\n');
	process.exit(1);
});
req.end();
