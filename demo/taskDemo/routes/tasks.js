var express = require('express');
var router = express.Router();

router.get('/tasks', function (req, res, next) {
    res.render('index.html');
});

module.exports = router;