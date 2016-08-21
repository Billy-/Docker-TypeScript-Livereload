var gulp = require('gulp'),
	notify = require('./notify'),

	buildTasks = [ 'install:dependencies', 'ts', 'other'];

buildTasks.forEach(t => gulp.task('deploy:' + t, ['notify:startStream', t], notify));

gulp.task('deploy', ['notify:startStream', ...buildTasks], notify);
