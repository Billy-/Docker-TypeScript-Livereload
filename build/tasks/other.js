var gulp = require('gulp'),
	cache = require('gulp-cached'),
	config = require('../config');

gulp.task('other', cb => {
	return gulp.src(config.paths.other)
		.pipe(cache('other'))
		.pipe(gulp.dest(config.paths.dest));
});