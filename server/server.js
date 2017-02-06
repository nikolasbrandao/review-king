// initial setup

var express = require('express');
var app = express();                             //create app with express
var mongoose = require('mongoose');              //mongodb
var morgan = require('morgan');                  //help debugging messages
var bodyParse = require('body-parser');          //help us to grab information from POST request
var methodOverride = require('method-override'); //support for DELETE and PUT method
var cors = require('cors');                      //Cross Origin Resource Sharing

// configuration

