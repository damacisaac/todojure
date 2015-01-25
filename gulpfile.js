var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    argv = require('yargs').argv,
    ngAnnotate = require('gulp-ng-annotate'),
    karma = require('gulp-karma'),
    es = require('event-stream');

var paths = {
    sassDir: [
        './resources/sass/**/*.scss'
    ],
    sass: [
        './resources/sass/app.scss'
    ],
    css: [
    ],
    js: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/jquery/dist/jquery.min.map.js',
        './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
        './bower_components/moment/min/moment-with-locales.min.js',
        './resources/js/lib/react.js',
    ],
    img: [
        './resources/img/*',
    ],
    fonts: [
        './bower_components/bootstrap-sass-official/assets/fonts/bootstrap/**/*.*',
    ],
};

gulp.task('default', ['watch']);

gulp.task('build', ['css', 'js', 'img', 'fonts']);

gulp.task('css', function() {
    var vendorFiles = gulp.src(paths.css);
    var appFiles = gulp.src(paths.sass)
        .pipe(sass({ style: 'compressed' }).on('error', gutil.log));

    return es.concat(vendorFiles, appFiles)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./resources/css/'))
        .pipe(minifyCss({ keepSpecialComments: 1 }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./resources/public/css'))
        .on('error', gutil.log);
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(concat('app.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./resources/public/js'))
        .on('error', gutil.log);
});

gulp.task('img', ['clean-img'], function() {
    return gulp.src(paths.img)
        // .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./resources/public/img'))
        .on('error', gutil.log);
});

gulp.task('fonts', ['clean-fonts'], function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('./resources/public/fonts/bootstrap'))
        .on('error', gutil.log);
});

gulp.task('clean-img', function() {
    return gulp.src('./resources/public/img', { read: false })
        .pipe(clean());
});

gulp.task('clean-fonts', function() {
    return gulp.src('./resources/public/fonts', { read: false })
        .pipe(clean());
});

gulp.task('clean-js', function() {
    return gulp.src('./resources/public/js/app.min.js', { read: false })
        .pipe(clean());
});

gulp.task('clean-css', function() {
    return gulp.src('./resources/public/css', { read: false })
        .pipe(clean());
});

gulp.task('clean', function() {
    return gulp.src('./resources/public/', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('watch', ['build'], function() {
    gulp.watch(paths.sassDir, ['css']);
    gulp.watch(paths.img, ['img']);
    gulp.watch(paths.js, ['js']);
});
