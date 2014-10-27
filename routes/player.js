var express = require('express');
var router = express.Router();

var spawn = require('child_process').spawn;

var player;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/play', function(req, res) {
    var loc = req.body.loc;

    player = spawn('omxplayer', [loc]);

    res.send('playing! ' + loc);
});

router.get('/stop', function(req, res) {
    res.render('stop', { title: 'Stopping' });
});

router.get('/pause', function(req, res) {
    res.render('pause');
});

module.exports = router;
