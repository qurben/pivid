/**
 * Created by Gerben on 27-10-2014.
 */

$('#pause').on('click', function(e) {
    $.post('/player/pause');
});

$('#stop').on('click', function(e) {
    $.post('/player/stop');
});

$('#start').on('click', function(e) {
    $.post('/player/start', {loc: $('#loc').val()});
});