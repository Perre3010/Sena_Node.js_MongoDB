'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//var project_routes = require('./routes/project');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//app.use('./api',project_routes);

app.get('/test',(req,res)=>{
    req.statusCode(200).send({message: 'holaaa mundoo'})
})

module.exports = app;