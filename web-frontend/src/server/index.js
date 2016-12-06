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

let symptom = [];
// Handle POST to create a new symptom
app.post('/v1/symptom', function(req, res) {
    let data = req.body;
    if (!data ||
        !data.bodyPart ||
        !data.title ||
        !data.description) {
        res.status(400).send({ error: 'all form fields required' });
    } else {
        let newSymptom = _.pick(data, 'bodyPart', 'title', 'description', 'images', 'options');
        newSymptom = _.extend(newSymptom, {
            id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
            //duration: Math.floor(Math.random() * 500),
            //winner: '',
            //points: Math.floor(Math.random() * 100)
        });
        console.log(newSymptom);
        res.status(201).send({
            symptomID: newSymptom.id
        });
    }
});


let server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});