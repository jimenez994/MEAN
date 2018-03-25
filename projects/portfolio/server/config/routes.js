const User = require("../controllers/userController");
const Image = require("../controllers/imageController");
const Project = require("../controllers/projectController");
const Accomplishment = require("../controllers/accomplishmentController");
const Work = require("../controllers/workController");
const Tech = require("../controllers/techController");
const Skill = require("../controllers/skillController");
const Recommendation = require("../controllers/recommendationController");
const Message = require("../controllers/messageController");
const Link = require("../controllers/linkController");
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

    // Message CRUD
    app.post("/message/create/:id", Message.create);
    app.get("/messages", Message.show);
    app.get("/message/:id", Message.showOne);
    app.delete("/message/delete/:id", Message.delete);

    // Project CRUD
    app.post("/project/create", Project.create);
    app.get("/projects", Project.show);
    app.get("/project/:id", Project.showOne);
    app.put("/project/update/:id", Project.update);
    app.delete("/project/delete/:id", Project.delete);
    
    // Accomplishment CRUD
    app.post("/accomplishment/create", Accomplishment.create);
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
    app.post("/tech/create", Tech.create);
    app.get("/techs", Tech.show);
    app.get("/tech/:id", Tech.showOne);
    app.put("/tech/update/:id", Tech.update);
    app.delete("/tech/delete/:id", Tech.delete);

    // Skill CRUD
    app.post("/skill/create", Skill.create);
    app.get("/skills", Skill.show);
    app.get("/skill/:id", Skill.showOne);
    app.put("/skill/update/:id", Skill.update);
    app.delete("/skill/delete/:id", Skill.delete);

    // Recommendation CRUD
    app.post("/recommendation/create", Recommendation.create);
    app.get("/recommendations", Recommendation.show);
    app.get("/recommendation/:id", Recommendation.showOne);
    app.put("/recommendation/update/:id", Recommendation.update);
    app.delete("/recommendation/delete/:id", Recommendation.delete);

    // Link CRUD
    app.post("/link/create", Link.create);
    app.get("/links", Link.show);
    app.get("/link/:id", Link.showOne);
    app.put("/link/update/:id", Link.update);
    app.delete("/link/delete/:id", Link.delete);


    // talk to the front end
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}