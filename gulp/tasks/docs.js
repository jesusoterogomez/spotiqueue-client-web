var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('docs', ['sassdoc', 'serve:docs'], function() {
    var options = {
        uri: 'http://localhost:8081',
        app: 'google chrome'
    };
    gulp.src(__filename)
    .pipe(open(options));
});
