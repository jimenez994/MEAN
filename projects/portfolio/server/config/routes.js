const User = require("../controllers/userController");
const Image = require("../controllers/imageController");
const Project = require("../controllers/projectController");
const Accomplishment = require("../controllers/accomplishmentController");
const Work = require("../controllers/workController");
const Tech = require("../controllers/techController");
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

    // Project CRUD
    app.post("/project/create", Project.create);
    app.get("/projects", Project.show);
    app.get("/project/:id", Project.showOne);
    app.put("/project/update/:id", Project.update);
    app.delete("/project/delete/:id", Project.delete);
    
    // Accomplishment CRUD
    app.post("/create/accomplishment", Accomplishment.create);
    app.get("/accomplishments", Accomplishment.show);
    app.get("/accomplishment/:id", Accomplishment.showOne);
    app.put("/accomplishment/update/:id", Accomplishment.update);
    app.delete("/accomplishment/delete/:id", Accomplishment.delete);

    // Work CRUD 
    app.post("/work/create", Work.create);
    app.get("/works", Work.show );
    app.get("/work/:id", Work.showOne);
    app.put("/work/update/:id", Work.update);
    app.delete("/work/delete/:id", Work.delete);

    // Tech CRUD


    // talk to the front end
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}