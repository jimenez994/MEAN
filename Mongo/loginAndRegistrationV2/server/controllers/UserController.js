let User = require("mongoose").model("User");

module.exports = {
    create: function (req, res) {
        User.find({ email: req.body.email }, function (err, users) {
            if (users.length > 0) {
                res.render("index", { regErrs: ["A user with this email already exists."] });
            } else {
                let user = new User(req.body);
                user.save(function (errs) {
                    if (errs) {
                        res.render("index", { regErrs: user.errors })
                    } else {
                        req.session.user_id = user.id;
                        req.session.user_name = user.first_name + " " + user.last_name;
                        res.redirect("/dashboard");
                    }
                });
            }
        })
    },

    login: function (req, res) {
        let errs = [];
        if (req.body.email.length < 1) { errs.push("Email cannot be blank."); }
        if (req.body.password.length < 1) { errs.push("Password cannot be blank."); }

        if (errs.length > 0) { res.render("index", { logErrs: errs }); }

        User.find({ email: req.body.email }, function (err, user) {
            if (user.length > 0) {
                user = user[0];

                if (!User.schema.methods.match(req.body.password, user.password)) {
                    res.render("index", { logErrs: ["Invalid Credentials."] });
                } else {
                    req.session.user_id = user.id;
                    req.session.user_name = user.first_name + " " + user.last_name;
                    res.redirect("/dashboard");
                };
            } else {
                res.render("index", { logErrs: ["User Not Found."] });
            }
        });
    }
};