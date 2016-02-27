var gulp = require('gulp');
var sassdoc = require('sassdoc');
var config = require('../config.js').sass;
var docs = require('../config.js').docs;

gulp.task('sassdoc', function() {
    var options = {
        dest: docs.dest,
        groups: docs.groups
    };

    return gulp.src(config.src)
        .pipe(sassdoc(options));
});
