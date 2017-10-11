'use strict';

var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var minifyCss    = require('gulp-minify-css');
var uglify       = require('gulp-uglify');
var stylus       = require('gulp-stylus');
var browserSync  = require('browser-sync').create();
var plumber      = require('gulp-plumber');
var pug          = require('gulp-pug');
var ngAnnotate   = require('gulp-ng-annotate');

var vendors = {
        css: [
            'bower_components/angular-material/angular-material.css'
        ],
        js: [],
        fonts: []
    };

// html
gulp.task('html', function () {
  	gulp.src('./app/index.html')
  		  .pipe(gulp.dest('./dist/'));
  	gulp.src('./app/modules/**/*.html')
  		  .pipe(gulp.dest('./dist/templates/'))
        .pipe(browserSync.reload({stream: true}));
});

// Pug
gulp.task('pug', function () {
    gulp.src(['./app/modules/**/*.pug', './app/js/**/*.pug'])
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('./dist/templates/'))
        .pipe(browserSync.reload({stream: true}));
});

// копирует файлы
gulp.task('copy', function() {
    
    gulp.src('./assets/images/**/*')
        .pipe(gulp.dest('./dist/images/'));

    gulp.src('./assets/files/**/*')
        .pipe(gulp.dest('./dist/files/'));
   	
   	gulp.src('./assets/fonts/*')
        .pipe(gulp.dest('./dist/fonts/'));
   	
   	gulp.src('./assets/sounds/*')
        .pipe(gulp.dest('./dist/sounds/'));

    gulp.src('./app/mail/**/*')
        .pipe(gulp.dest('./dist/mail/'));

});

// копируем библиотеки
gulp.task('libs', function() {
	
  	gulp.src(vendors.css)
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest('./dist/css/'));

  	gulp.src(vendors.fonts)
        .pipe(gulp.dest('./dist/fonts/'));

  	gulp.src(vendors.js)
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('./dist/js/'));

  	gulp.src([
            './bower_components/angular/angular.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            './bower_components/angular-aria/angular-aria.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-material/angular-material.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-messages/angular-messages.js'
        ])
        .pipe(concat('angular.concat.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));

});

// stylus
gulp.task('stylus', function () {
    gulp.src('./app/**/*.styl')
    .pipe(plumber())
		.pipe(stylus({compress: true}))
		.pipe(autoprefixer('> 1%', 'last 15 versions', 'ie 8', 'Firefox ESR', 'Opera 12.1'))
		.pipe(concat('style.min.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({stream: true})); 
});

// js
gulp.task('js', function () {
    gulp.src([
        './app/js/app.js',
        './app/**/*.js',
        './app/**/*.module.js'
        ])
    .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({stream: true}));
});

// watch
gulp.task('watch', function () {
    gulp.watch('./app/**/*.styl', ['stylus']);
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./app/**/*.pug', ['pug']);
    gulp.watch('./app/**/*.js', ['js']);
    gulp.watch('./assets/images/**/*', ['copy']);
    gulp.watch('./assets/fonts/**/*', ['copy']);
    gulp.watch('./assets/sounds/**/*', ['copy']);
    gulp.watch('./app/mail/mail.php', ['copy']);
});

// serve
gulp.task('serve', function() {
    browserSync.init({
        server: "./dist",
        open: true
    });
});

// default
gulp.task('default', ['stylus','copy', 'pug', 'html', 'libs', 'js', 'serve', 'watch']);

gulp.task('build', ['stylus', 'copy', 'pug', 'html', 'libs', 'js']);