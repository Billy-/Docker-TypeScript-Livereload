var gulp = require('gulp'),
	config = require('../config');

gulp.task('watch', () => {
	//console.log(config.paths.ts.src,config.paths.other,config.paths.install)
	gulp.watch([config.paths.ts.src, config.paths.typings], ['deploy:ts']);
	gulp.watch(config.paths.other, ['deploy:other']);
	gulp.watch(config.paths.install, ['deploy:install:dependencies']);
});