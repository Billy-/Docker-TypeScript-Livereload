var gulp = require('gulp'),
	del = require('del'),
	config = require('../config');

gulp.task('clean', () => del.sync(config.paths.clean));