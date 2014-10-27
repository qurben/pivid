var express = require('express');
var router = express.Router();

var player = require('../controller/player')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/play', function(req, res) {
    var loc = req.body.loc;

    player.play(loc);

    res.send('playing! ' + loc);
});

router.get('/stop', function(req, res) {
    player.stop();
    res.render('stop', { title: 'Stopping' });
});

router.get('/pause', function(req, res) {
    player.pause();
    res.render('pause');
});

module.exports = router;
