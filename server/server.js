// initial setup

var express = require('express');
var app = express();                             //create app with express
var mongoose = require('mongoose');              //mongodb
var morgan = require('morgan');                  //help debugging messages
var bodyParse = require('body-parser');          //help us to grab information from POST request
var methodOverride = require('method-override'); //support for DELETE and PUT method
var cors = require('cors');                      //Cross Origin Resource Sharing

// configuration

mongoose.connect('mongodb://localhost/reviewking');

app.use( morgan.dev() ); //log every request to the console
app.use( bodyParse.urlencoded({'extended':'true'}) ); //parse application/x-www-form-urlencoded
app.use( bodyParse.json() ); //pase application/json
app.use( bodyParse.json({ type: 'application/vnd.api+json' }) );
app.use( methodOverride() );
app.use( cors() );
