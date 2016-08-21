var gulp = require('gulp'),
    install = require('gulp-install'),
    typings = require('gulp-typings'),
    plumber = require('gulp-plumber'),
    cache = require('gulp-cached'),
    config = require('../config');

gulp.task('install:dependencies', () => {
    return gulp.src(config.paths.install)
        .pipe(plumber({
         errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(cache('package'))
        .pipe(gulp.dest(config.paths.dest))
        .pipe(install());
});

gulp.task('install:definitions', () => {
    // TODO: (for all tasks) - caching? This task is a dependency of ts but should check for changes
    return stream = gulp.src(config.paths.typings)
        .pipe(cache('typings'))
        .pipe(typings());
});
