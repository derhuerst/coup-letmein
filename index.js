#!/usr/bin/env node
'use strict'

const http = require('http')



const req = http.request({hostname: '192.168.2.5', port: 80, path: '/letmein'})

req.on('socket', (s) => s.setTimeout(3000, () => req.abort()))
req.on('error', (err) => {
	process.stdout.write(`\
${err.code} error, connecting to port ${err.port} at ${err.address}.\n`)
	process.exit(1)
})

req.on('response', (res) => {
	if (res.statusCode < 200 || res.statusCode >= 300) {
		process.stdout.write(`\
${res.statusCode} ${res.statusMessage}\n`)
		process.exit(1)
	}
})

req.end() // send request without a body
