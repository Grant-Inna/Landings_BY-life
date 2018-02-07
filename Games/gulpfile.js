const gulp = require('gulp'),
    smartGrid = require('smart-grid'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    browserSync = require("browser-sync").create(),
    sourcemaps = require("gulp-sourcemaps"),
    notify = require("gulp-notify");





gulp.task('CSS1', function() {
    return gulp.src( '1/dev/less/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '1/css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '1/css/' ))
        .pipe(notify('CSS1 Success!'));
});


gulp.task('CSS2', function() {
    return gulp.src( '2/dev/less/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '2/css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '2/css/' ))
        .pipe(notify('CSS2 Success!'));
});


gulp.task('CSS3', function() {
    return gulp.src( '3/dev/less/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '3/css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '3/css/' ))
        .pipe(notify('CSS3 Success!'));
});


gulp.task('CSS4', function() {
    return gulp.src( '4/dev/less/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '4/css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '4/css/' ))
        .pipe(notify('CSS4 Success!'));
});


gulp.task('CSS5', function() {
    return gulp.src( '5/dev/less/style.less' )
        .pipe(less())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(gulp.dest( '5/css/' ))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '5/css/' ))
        .pipe(notify('CSS5 Success!'));
});


gulp.task('jade_1', function() {
    return gulp.src( '1/dev/index.jade' )
        .pipe( jade() )
        .pipe( gulp.dest( '1/' ))
});
gulp.task('jade_2', function() {
    return gulp.src( '2/dev/index.jade' )
        .pipe( jade() )
        .pipe( gulp.dest( '2/' ))
});
gulp.task('jade_3', function() {
    return gulp.src( '3/dev/index.jade' )
        .pipe( jade() )
        .pipe( gulp.dest( '3/' ))
});
gulp.task('jade_4', function() {
    return gulp.src( '4/dev/index.jade' )
        .pipe( jade() )
        .pipe( gulp.dest( '4/' ))
});
gulp.task('jade_5', function() {
    return gulp.src( '5/dev/index.jade' )
        .pipe( jade() )
        .pipe( gulp.dest( '5/' ))
});







gulp.task('smartGrid', function() {
    var options = {
        offset: "0",
        columns: "10",
        mobileFirst: true,
        container: {
            maxWidth: "850px",
            fields: "0"
        },
        breakPoints: {
            lg: {
                width: '800px'
            },
            md: {
                width: '730px'
            },
            sm: {
                width: '660px'
            },
            xsm: {
                width: '560px'
            },
            xs: {
                width: '410px'
            },
            xxs: {
                width: '359px'
            },
            tiny: {
                width: '310px'
            }
        }
    };
    smartGrid( './', options);
});



gulp.task( 'watch__common', function() {
    gulp.watch([ 'common.less' ], all);
});


gulp.task( 'watch__all', function() {
    gulp.watch([ 'common.less', 'var.less', 'checkbox.less', allSRC ], all);
});

var all = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5' ];
var allSRC = './**/dev/less/*.less';
var allW = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'watch__common' ];
var allSrcTask = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'watch__all' ];

var jadeTask = [ 'jade_1', 'jade_2', 'jade_3', 'jade_4', 'jade_5' ];

gulp.task( 'default1', allW );
gulp.task( 'default', allSrcTask );
gulp.task( 'jade', jadeTask );




