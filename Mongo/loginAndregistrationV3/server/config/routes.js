
const Users = require('../controllers/user');
module.exports = function(app){
    app.get('/', USers.homepage );
    app.post('/users', Users.create);
    app.post('/users/authentication', Users.authenticate);
    app.get('/session', Users.isLoggedIn);
    app.delete('/session',Users.logout);
};
