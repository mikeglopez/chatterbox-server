/* Import node's http module: */
// START HERE 1/25/19:
// look at console.log on 45
// TODO:
// request.url is wrong
// request is too long
// path is just / (should be classes/messages)
// getting reference to 'order: '-createdAt' when we console.log urlParts - line 46
// Stephanie's thought var path = require('path') - as shown in video


// var http = require('http');
// var url = require('url');
// var handleRequest = require('./request-handler.js');

// // Every server needs to listen on a port with a unique number. The
// // standard port for HTTP servers is port 80, but that port is
// // normally already claimed by another server and/or not accessible
// // so we'll use a standard testing port like 3000, other common development
// // ports are 8080 and 1337.
// var port = 3000;

// // For now, since you're running this server on your local machine,
// // we'll have it listen on the IP address 127.0.0.1, which is a
// // special address that always refers to localhost.
// var ip = '127.0.0.1';

// //console.log('handleRequest', handleRequest);


// var routes = {
//   // add base message /
//   '/classes/messages': handleRequest
// };
// // We use node's http module to create a server.
// //
// // The function we pass to http.createServer will be used to handle all
// // incoming requests.
// //
// // After creating the server, we will tell it to listen on the given port and IP. */
// // var server = http.createServer(handleRequest);
// // console.log('Listening on http://' + ip + ':' + port);
// // server.listen(port, ip);

// var server = http.createServer(function(request, response) {
//   //request.url is wrong
//   var urlParts = url.parse(request.url);
//  // console.log('response', response);
//   console.log('request.url', request.url);
//   //console.log('urlParts', urlParts);
//   var route = routes[urlParts.pathname];
//   //console.log('route', route);.
//   if (route) {
//     route(request, response);
//   }
//   //add else statements
// }).listen(port, ip);

// To start this server, run:
//
//   node basic-server.js
//
// on the command line.
//
// To connect to the server, load http://127.0.0.1:3000 in your web
// browser.
//
// server.listen() will continue running as long as there is the
// possibility of serving more requests. To stop your server, hit
// Ctrl-C on the command line.

// ---------------------------------------------------------------------------

var http = require('http');
var handleRequest = require('./request-handler.js');

var port = 3000;
var ip = '127.0.0.1';

var server = http.createServer(handleRequest.requestHandler);
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);