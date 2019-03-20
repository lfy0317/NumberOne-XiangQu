const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
})

gulp.task('default',()=>{
	gulp.watch(['./src/sass/*.scss'],['sass']);
})