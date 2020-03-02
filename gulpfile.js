const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require("gulp-rename");

gulp.task('hello', function(done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./css/*.css").on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// Cssmin
gulp.task('cssmin', function (done) {
  gulp.src('./css/*.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css/'));
  done();
});