/**
 * Created by Jesse on 11/10/2016.
 */
'use strict';

let express         = require('express'),
    bodyParser      = require('body-parser'),
    logger          = require('morgan'),
    _               = require('underscore');


var crypto = require('crypto');
var router = express.Router();


var fs = require('fs');


let app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../../public'));


console.log("server is up and running");


let server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});