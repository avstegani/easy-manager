var express = require('express');
var tables = require('./tables');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(tables.get('profile'));
});

module.exports = router;