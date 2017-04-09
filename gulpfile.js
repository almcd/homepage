var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
 
// Compile and minify SASS
gulp.task('css', function () {
  return gulp.src('src/style/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/style'))
    .pipe(livereload());
});
 
gulp.task('watch', function () {
	livereload.listen();
  	gulp.watch('src/style/*.scss', ['css']);
});

gulp.task('default', ['css']);