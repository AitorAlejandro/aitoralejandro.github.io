var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    autoprefixerOptions = {browsers: ['last 2 versions', '> 5%', 'Firefox ESR']};

gulp.task('sassbase', function () {
  return gulp.src('./src/sass/base/base.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./css'));
});


gulp.task('sass', ['sassbase'], function () {
  console.log("Generado bundle CSS desde SCSS");
});