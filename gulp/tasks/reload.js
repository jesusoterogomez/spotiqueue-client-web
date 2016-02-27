var gulp = require('gulp');
var sync = require('browser-sync');

gulp.task('reload:scripts', ['browserify'], function() {
    sync.reload();
});

gulp.task('reload:styles', ['styles'], function() {
    sync.reload();
});

gulp.task('reload:html', ['wiredep', 'html'], function() {
    sync.reload();
});

gulp.task('reload:fonts', ['fonts'], function() {
    sync.reload();
});

gulp.task('reload:images', ['images'], function() {
    sync.reload();
});
