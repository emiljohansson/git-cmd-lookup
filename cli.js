#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const commands = require('./commands')
const firstArg = argv._[0]
const command = commands[firstArg]
const result = command || Object.keys(commands).join('\n')

console.log(result)
