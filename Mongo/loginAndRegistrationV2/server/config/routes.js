let mongoose = require("mongoose");
let UserController = require("../controllers/UserController.js");

module.exports = function (app) {
    app.get("/", function (req, res) {
        req.session.destroy();
        res.render("index");
    });

    app.post("/register", function (req, res) {
        UserController.create(req, res);
    });

    app.post("/login", function (req, res) {
        UserController.login(req, res);
    });

    app.get("/dashboard", function (req, res) {
        if (!req.session.user_id) {
            res.redirect("/");
        } else {
            res.render("dashboard", { user_name: req.session.user_name });
        }
    });
}