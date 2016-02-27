var gulp = require('gulp');

gulp.task('build', ['wiredep', 'browserify', 'styles', 'fonts', 'images']);

gulp.task('build:prod', ['wiredep', 'fonts', 'images', 'html',
    'uglify', 'minify:css', "rev:assets"], function() {
        console.log("Build Successful");
        process.exit(0);
    });
