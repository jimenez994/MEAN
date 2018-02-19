const User = require("../controllers/userContrtoller");
const path = require("path");

module.exports = (app) => {
    app.post("/user/create", User.create);
    app.post("/user/login", User.login);
    app.get("/user", User.session);
    app.get("/users", User.show);
    app.delete("/user/logout", User.logout);
    
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}