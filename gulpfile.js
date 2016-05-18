
var gulp = require('gulp');
var babel = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream')

// simple test
gulp.task('js', function() {
    browserify({ entries: [ './src/js/app.js' ] }).transform(babel.configure({
      presets: ['es2015']
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['js']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
    });
});
gulp.watch("*.html").on('change', browserSync.reload);

gulp.task('default', ['watch', 'browser-sync']);

