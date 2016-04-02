#!/usr/bin/env node
'use strict'

const http = require('http')

let req = http.request({host: '192.168.2.5', path: '/letmein'})
req.on('socket', (socket) => socket.setTimeout(3000, () => req.abort()))
req.on('error', (err) => {
	console.error(`An ${err.code} error occured.`)
	process.exit(1)
})
req.end()
