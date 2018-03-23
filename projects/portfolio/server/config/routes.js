const User = require("../controllers/userController");
const Image = require("../controllers/imageController");
const Project = require("../controllers/projectController");
const path = require("path");

module.exports = (app) => {
    //user
    app.post("/user/create", User.create);
    app.post("/user/login", User.login);    
    app.get("/users", User.show);
    app.get("/user", User.session);
    app.delete("/user/logout", User.logout);
    app.put("/user/update", User.edit);

    // Image
    app.post("/upload", Image.createImage);
    app.get("/images", Image.getImages);
    app.delete("/image/:id", Image.deleteImage);

    // 
    app.post("/create/project", Project.create);
    app.get("/projects", Project.show);
    

    // talk to the front end
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}