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
app.post('/v1/bodypart', function(req, res) {
    let data = req.body;
    if (!data ||
        !data.bodypart ||
        !data.symptom ||
        !data.description ||
        !data.severity) {
        res.status(400).send({ error: 'all form fields required' });
    } else {
        let newSymptom = _.pick(data, 'bodypart', 'symptom', 'description', 'severity');
        newSymptom = _.extend(newSymptom, {
            id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
            //duration: Math.floor(Math.random() * 500),
            //winner: '',
            //points: Math.floor(Math.random() * 100)
        });
        symptom.push(newSymptom);
        res.status(201).send({
            symptomID: newSymptom.id
        });
    }
});


let server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});