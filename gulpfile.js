var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssMin = require('gulp-cssmin'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    autoprefixerOptions = {browsers: ['last 2 versions', '> 5%', 'Firefox ESR']};

//Transpila base.scss en forma compressed, pasa el autoprefixer y deja el resultado en ./css/base.css
gulp.task('sassbase', function () {
  return gulp.src('./src/sass/base/base.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssMin())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

//borra el contenido del directorio './css'
gulp.task('cleancss', function () {
  return del(['./css']);
});

gulp.task('sass', ['cleancss', 'sassbase'], function () {
  console.log("Generado bundle CSS desde SCSS");
});
