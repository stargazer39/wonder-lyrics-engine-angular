"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var path = require("path");
var port = process.env.PORT || 4200;
var app = express();
app.set('port', port);
app.use(express.static(path.join(__dirname, 'dist/wle')));
var server = http.createServer(app);
server.listen(port, function () {
    console.log("Express Listening @ " + port);
});
