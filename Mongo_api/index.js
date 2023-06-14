'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Projects')
.then(()=>{
    console.log('conexion a la base de datos exitosa')
})
.catch(err => console.log(err));