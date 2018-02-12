var path = require('path'),
    posts = require('../controllers/posts')
module.exports = (app) => {
    app.get('/posts', posts.index);
    app.post('/posts', posts.create);

    
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}