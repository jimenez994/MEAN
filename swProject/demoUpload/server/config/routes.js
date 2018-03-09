const Img = require('./../controllers/imgController')
const path =  require("path");

module.exports = (app) => {
    app.post("/upload", Img.createImg);
    app.get("/images", Img.getImgs);
    app.delete("/image/:id", Img.deleteImg);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}