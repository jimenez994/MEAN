var Player  = require("../controllers/playerController")
const path = require('path')

module.exports = function(app){
    app.post("/player", Player.create);
    app.get("/player", Player.show);
    app.get("/player/:id", Player.singlePlayer);
    app.put("/player/:id", Player.update);
    app.delete("/player/:id", Player.destroy);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}