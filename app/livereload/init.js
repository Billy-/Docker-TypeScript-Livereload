var server = require('./server');

server.start();

process.on('SIGTERM', () => server.stop(() => process.exit(0)));