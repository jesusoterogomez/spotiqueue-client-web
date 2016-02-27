var gulp = require('gulp');
var config = require('../config').watch;
var watch = require('gulp-watch');

gulp.task('watch', function() {
    watch(config.styles.src, function() {
        gulp.start(config.styles.tasks);
    });

    watch(config.html.src, function() {
        gulp.start(config.html.tasks);
    });

    watch(config.scripts.src, function() {
        gulp.start(config.scripts.tasks);
    });

    watch(config.images.src, function() {
        gulp.start(config.images.tasks);
    });

    watch(config.fonts.src, function() {
        gulp.start(config.fonts.tasks);
    });
});

gulp.task('watch:docs', ['build'], function() {
    gulp.watch(config.src, config.tasks);
});
