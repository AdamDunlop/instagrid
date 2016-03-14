var gulp = require('gulp');
    uglify = require('gulp-uglify');
    browserSync = require('browser-sync').create();
    plumber = require('gulp-plumber');
    notify = require('gulp-notify');
    jscs = require('gulp-jscs');
    jshint = require('gulp-jshint');
    sass = require('gulp-ruby-sass');
    autoprefixer = require('gulp-autoprefixer');
    minifyCSS = require('gulp-minify-css');
    rename = require('gulp-rename');

gulp.task('gulp-ruby-sass', function() {
    gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browser:['last 2 versions']
    })) 
    .pipe(minifyCSS())
    .pipe(rename(style.min.css))
    .on('error', sass.logError)
    .pipe(gulp.dest('build'));
});

gulp.task('uglify', function(){
  gulp.src('js/script.js')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(jscs())
    .pipe(notify({
      title: 'JSCS',
      message: 'message'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('browserSync', function(){

    browserSync.init({
        server: {
            baseDir: "./"
              }  
        });
});

gulp.watch(['js/main.js'], ['uglify']);
gulp.watch(['build/script.js', './build/css/style.min.css', 'index.html']).on('change', browserSync.reload);

gulp.task('watch', function(){
  gulp.watch('css/*.css', ['gulp-ruby-sass']);
});

gulp.task('default', ['watch', 'browserSync']);

