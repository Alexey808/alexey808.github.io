var gulp = require('gulp');
var react = require('react');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

//var sourcemaps = require('gulp-sourcemaps');

var path = { js: 'js/' };

gulp.task('build', function () {
    return browserify({ entries: 'js/app.jsx', extensions: ['.jsx'], debug: true })
      	.transform('babelify', { presets: ['es2015', 'react'] })
      	.bundle()
      	.pipe(source('bundle.js'))
      	.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch([path.js], ['build']);
});

gulp.task('default', ['watch']);

