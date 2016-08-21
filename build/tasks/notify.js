var gulp = require('gulp'),
    http = require('http'),
    fs = require('fs'),

    activeStreams = 0;
    // TODO: Track streams and only send 1 notification when all (deployable) streams are complete
    notify = () => {
        activeStreams--;
        if (activeStreams >= 1) return;
        var notification = 'Have some files!';
        console.log('Sending notification: ', notification);

        // An object of options to indicate where to post to
        req_options = {
            host: 'app',
            port: '8081',
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Content-Size': Buffer.byteLength(notification)
            }
        };

        // Set up the request
        var req = http.request(req_options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('Response: ' + chunk);
            });
        });

        req.on('error', e => console.log(e));
        req.on('timeout', e => console.log(e));

        req.write(notification);
        req.end();
    };

gulp.task('notify:startStream', () => {
    activeStreams++;
});

module.exports = notify;