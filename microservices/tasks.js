var express = require('express');
var tables = require('./tables');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(tables.get('task'));
});

module.exports = router;