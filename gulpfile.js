var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var csscomb = require('gulp-csscomb');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src('common/sass/**/*.scss')
  .pipe(plumber()) 
  .pipe(sass({outputStyle: 'expanded'}))// nested, expanded, compact, compressed
  .pipe(gulp.dest('common/css'));
});

// ファイル更新監視
gulp.task('watch', function(){
  gulp.watch('common/sass/*.scss', ['sass']);
});

// CSSのプロパティの順番整理
gulp.task('csscomb', function() {
  return gulp.src('common/layout.css')
      .pipe(csscomb())
      .pipe(gulp.dest('common/css'));
});

gulp.task('default', ['sass','watch','csscomb']);