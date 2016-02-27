var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var config = require('../config').browserify;

var bundler = watchify(browserify(config.src, watchify.args));

function logError(e) {
    console.log(e.toString()); // Print error to console

    if (e.loc) {
        console.log('Line: ' + e.loc.line + ' - Column: ' + e.loc.column);
    }

    this.emit('end');
}

watchify.args.debug = config.debug;
config.settings.transform.forEach(function(t) {
    bundler.transform(t);
});

function bundle() {
    return bundler.bundle()
    .on('error', logError)
    .pipe(source(config.outputName))
    .pipe(gulp.dest(config.dest));
}

gulp.task('browserify', bundle);
bundler.on('update', bundle);
