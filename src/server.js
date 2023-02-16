const express = require('express');
const bodyparser = require('body-parser');


const server = express();
server.use(bodyparser.json({limit: '64mb'}));
server.use(bodyparser.urlencoded({extended: true, limit: '64mb'}));
const routes = require('./api/v1/router')

server.use('/api-test/v1', routes);

module.exports = server


