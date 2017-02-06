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

app.use( function(req, res, next){
    res.header('Acess-Control-Allow-Origin','*');
    res.header('Acess-Control-Allow-Methods','DELETE,PUT');
    res.header('Acess-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
} );

// Models

var Review = mongoose.model('Review', {
    title: String,
    description: String,
    rating: Number
});

// Routes

    // get reviews
    app.get('/api/reviews', function(req, res){
        console.log('fetching reviews');

        // use moongose to get all reviews in the database
        Review.find(function(err, reviews){
            if(err){
                res.send(err);
            }

            res.json(reviews);
        });
    });

    // create review and send back all reviews after creation 
    app.post('/api/reviews', function(req, res){
        console.log('creating review');

        //create review
        Review.create({
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating,
            done : false
        }, function(err, review){
            if(err){
                res.send(err);
            }

            // get and return all the reviews after you create another
            Review.find(function(err, reviews){
                if(err){
                    res.send(err);
                }

                res.json(reviews);
            });

        });

    });

    //delete review
    app.delete('/api/reviews/:review_id', function(req, res){
        Review.remove({
            _id: req.params.review_id
        }, function(err, reviews){
            if(err){
                res.send(err);
            }
        });
    });
