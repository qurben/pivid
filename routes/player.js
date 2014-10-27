var express = require('express');
var router = express.Router();

var omx = require('omxcontrol');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/:name/play', function(req, res) {
    var loc = req.body.loc;

    omx.start(loc);

    res.send('playing! ' + loc);
});

router.post('/:name/stop', function(req, res) {
    omx.stop();
    res.send(200);
});

router.post('/:name/pause', function(req, res) {
    omx.pause();
    res.send(200);
});

module.exports = router;
