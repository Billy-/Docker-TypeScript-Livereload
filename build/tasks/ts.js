var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    config = require('../config'),

    tsp = ts.createProject(config.paths.ts.config),

    stream = () => {
        var tsResult = tsp.src()
            .pipe(ts(tsp));

        return tsResult.js.pipe(gulp.dest(config.paths.ts.dest));

    }

gulp.task('ts', ['install:definitions'], stream);
