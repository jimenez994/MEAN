const User = require("../controllers/userController");
const path = require("path");

module.exports = (app) => {
    //user
    app.post("/user/create", User.create);
    app.post("/user/login", User.login);    
    app.get("/users", User.show);
    app.get("/user", User.session);
    app.delete("/user/logout", User.logout);

    // talk to the front end
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}