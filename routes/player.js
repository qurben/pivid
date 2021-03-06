var express = require('express');
var router = express.Router();

var omx = require('../controller/omxcontrol');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/start', function(req, res) {
    var loc = req.body.loc;

    omx.start(loc);
    res.send(200);
});

router.post('/stop', function(req, res) {
    omx.quit();
    res.send(200);
});

router.post('/pause', function(req, res) {
    omx.pause();
    res.send(200);
});

module.exports = router;
