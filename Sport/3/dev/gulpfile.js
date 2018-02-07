var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    browserSync = require("browser-sync").create(),
    notify = require("gulp-notify");


gulp.task( 'browser', function() {
    browserSync.init({
        server: {
            baseDir: '../'
        }
    });
});

gulp.task('imageMIN', function() {
    return gulp.src( 'images/*.{png,jpg,jpeg,svg}' )
        .pipe(imagemin())
        .pipe(gulp.dest( '../images/' ))
        .pipe(notify('Images Compress Success!'));
});


gulp.task('CSS', function() {
    return gulp.src( 'less/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '../css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '../css/' ))
        .pipe(notify('CSS Success!'));
});


gulp.task('watch_CSS', ['browser'], function() {
    gulp.watch('less/*.less', ['CSS']);
    gulp.watch('less/*.less').on('change', browserSync.reload)
});


gulp.task('watch_imageMIN', function() {
    gulp.watch('images/*.{png,jpg,jpeg,svg}', ['imageMIN']);
    gulp.watch('images/*.{png,jpg,jpeg,svg}').on('change', browserSync.reload)
});

gulp.task('default', ['jade', 'watch_JADE', 'CSS', 'watch_CSS', 'imageMIN']);
gulp.task('images', ['imageMIN', 'watch_imageMIN']);


gulp.task('watch_JADE', ['browser'], function() {
    gulp.watch('*.jade', ['jade']);
    gulp.watch('*.jade').on('change', browserSync.reload)
});

gulp.task('jade', function() {
    return gulp.src( 'index.jade' )
        .pipe(jade())
        .pipe(gulp.dest( '../' ))
        .pipe(notify('JADE Success!'));
});

