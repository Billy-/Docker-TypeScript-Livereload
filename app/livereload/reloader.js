var exec = require('child_process').exec,
	child = null,
	isActive = false,
	isTerminating = false,

	reload = () => {
		if (isTerminating) {
			return;
		} else if (isActive) {
			child.on('close', startNewChild);
			child.kill();
			isTerminating = true;
			console.log('SIGTERM sent to child.')
		} else startNewChild();
	},

	startNewChild = (code, signal) => {
		if (signal === "SIGTERM") {
			console.log('Child was killed successfully.');
			isTerminating = false;
		}
		console.log('Starting new child');
		child = exec('npm run start', {cwd: './dist'});
		attachListeners(child);
		isActive = true;
	},

	attachListeners = child => {
		child.stdout.on('data', data => {
			console.log('stdout: ' + data)
		});
		child.stderr.on('data', data => {
			console.log('stderror: ' + data)
		});
		child.on('close', (code, signal) => {
			console.log('Child closed. code.signal: ', code, signal)
		});
		child.on('exit', (code, signal) => {
			console.log('Child exited. code/signal: ', code, signal)
			isActive = false;
		});
	};

module.exports = reload;