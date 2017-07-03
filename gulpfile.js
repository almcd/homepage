var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var gzip = require('gulp-gzip');

// Compile and minify SASS
gulp.task('css', function () {
  return gulp.src('src/style/default.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/style'))
    .pipe(livereload());
});

// Minify JavaScript
gulp.task('scripts', function() {  
    return gulp.src('src/js/default.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

// Apply gzip compression
gulp.task('compress', function() {
    gulp.src('dist/style/default.css')
    .pipe(gzip())
    .pipe(gulp.dest('dist/style'));
});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/style/default.scss', ['css']);
    gulp.watch('src/js/default.js', ['scripts'])
    gulp.watch('dist/style/default.css', ['compress']);
});

gulp.task('default', ['css', 'scripts', 'compress']);