const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const modelPath = path.join(__dirname, "./../models");

mongoose.connect("mongodb://localhost/login", { useMongoClient: true });
mongoose.Promise = global.Promise;

fs.readdirSync(modelPath).forEach(function (file) {
    if (file.includes(".js")) {
        require(modelPath + "/" + file);
    }
})