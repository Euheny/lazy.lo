'use strict'

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var postcssSVG = require('postcss-svg');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');


gulp.task('styles', function() {
  return gulp.src(['src/lazy-lo.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 5 version']
      }),
      postcssSVG({
        paths: ['src']
      })
    ]))
    .pipe(gulp.dest('dist'))
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('../dist'))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src(['src/lazy-lo.js'])
    .pipe(gulp.dest('dist'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('../dist'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['styles', 'scripts'], function() {
  gulp.watch('src/*.js', ['scripts']);
  gulp.watch(['src/*.scss','src/*.svg'], ['styles']);

});

gulp.task('default', ['styles', 'scripts']);
