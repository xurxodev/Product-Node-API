"use strict"

var restify = require('restify');
var fs = require('fs');

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

fs.readdirSync('./routes').forEach(function(curFile) {
    if (curFile.substr(-3) === '.js') {
        let routes = require('./routes/' + curFile);
        routes.register(server);
    }
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
