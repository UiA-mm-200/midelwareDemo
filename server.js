const express = require('express');
const bodyParser = require('body-parser');
const authenticator = require("./modules/auth");
const {
  Router
} = require('express');
const secureEndpoints = require("./modules/secureEndpoints")

const server = express();
const port = (process.env.PORT || 8080);


server.set('port', port);
server.use(express.static('public'));
server.use(bodyParser.json());
// https://expressjs.com/en/guide/routing.html
server.use("/secure", secureEndpoints);


server.listen(server.get('port'), function () {
  console.log('server running', server.get('port'));
});