var http = require('http'),
	reload = require('./reloader'),
	server,

	respond = (req, res) => {
		var data = '';
		req.on('data', (chunk) => data += chunk);
		req.on('end', () => {
			console.log('Notification: ' + data);
			console.log('Sending response: Thanks!');
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.write('Thanks!');
			res.end();
			console.log('Reloading app...');
			reload();
		});
	},
	start = () => {
		// Port should be parameter passsed in by cli/docker via bootstrap.js
		server = http.createServer(respond).listen(8081);
		console.log('Livereload server running on port 8081');
	},

	stop = cb => server.close(cb);

module.exports = {
	start: start,
	stop: stop
};
