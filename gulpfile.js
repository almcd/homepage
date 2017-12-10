var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// Copy index file
gulp.task('copyindex', function() {
   gulp.src('src/index.htm')
   .pipe(gulp.dest('./dist'));
});

// Compile and minify SASS
gulp.task('css', function () {
  return gulp.src('src/style/default.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/style'))
    .pipe(browserSync.stream());
});

// Minify JavaScript
gulp.task('scripts', function() {  
    return gulp.src('src/js/default.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Server for local development
gulp.task('serve', function() {
  // Init browserSync
  browserSync.init({
    open: true,
    server : {
      baseDir : 'dist',
      index : "index.htm"
    }  
  });

  // Watch files
  gulp.watch('src/index.htm', ['copyindex']);
  gulp.watch('src/style/default.scss', ['css']);
  gulp.watch('src/js/default.js', ['scripts']);

  gulp.watch("dist/*.htm").on('change', browserSync.reload);
});

gulp.task('deploy', ['copyindex', 'css', 'scripts']);
gulp.task('default', ['deploy', 'serve']);