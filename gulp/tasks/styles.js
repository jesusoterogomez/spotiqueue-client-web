var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync');
var config = require('../config.js').sass;

function logError(e) {
    // If you want details of the error in the console
    console.log(e.toString());
    this.emit('end');
}

function throwBuildError(e) {
    console.log(e.toString());
    process.exit(1); // Exit build to avoid scss errors on dist.
}

gulp.task('styles', function() {
    return gulp.src(config.src)
        .pipe(sass(config.settings))
        .on('error', logError)
        .pipe(gulp.dest(config.dest))
        .pipe(sync.stream());
});

gulp.task('styles:prod', function() {
    return gulp.src(config.src)
        .pipe(sass(config.settings))
        .on('error', throwBuildError)
        .pipe(gulp.dest(config.dest));
});
