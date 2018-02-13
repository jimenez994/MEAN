const mongoose = require('mongoose');
const fs = require('fs');
const path = require("path")
const models_path = path.join(__dirname, "./../models");
mongoose.connect('mongodb://localhost/surveyDemo', { useMongoClient: true })
mongoose.Promise = global.Promise;

// const models_path = __dirname + './../models';
fs.readdirSync(models_path).forEach((file) => {
    if(file.includes('.js')){
        console.log(`lading ${file}..`);
        require(`${models_path}/${file}`);
    }
})