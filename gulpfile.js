const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');

function styles() {
    return gulp.src('src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(replace(/\n+$/, ''))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('src/styles/**/*.scss', gulp.parallel(styles));
}