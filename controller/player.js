var spawn = require('child_process').spawn;

module.exports = (function() {
    var omx;
    var player = {};

    player.play = function(loc) {
        omx = spawn('omxplayer', [loc], {env: "DISPLAY=:0"});

        omx.stdout.on('data', function(data) {
            console.log(data);
        });
    };

    player.stop = function() {
        omx.stdin.write('q');
    };

    player.pause = function() {
        omx.stdin.write('p');
    }

    return player;
})();
