var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
 
// Compile and minify SASS
gulp.task('css', function () {
  return gulp.src('src/style/default.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/style'))
    .pipe(livereload());
});

gulp.task('scripts', function() {  
    return gulp.src('src/js/default.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
  	gulp.watch('src/style/default.scss', ['css']);
  	gulp.watch('src/js/default.js', ['scripts']);
});

gulp.task('default', ['css', 'scripts']);