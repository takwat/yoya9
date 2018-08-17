const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const csscomb = require('gulp-csscomb');
const grouping = require('gulp-group-css-media-queries');

gulp.task('sass', () => {
	gulp.src('sass/**/*.scss')
	.pipe(plumber({
		errorHandler: function(err) {
			console.error(err);
			// this.emit('end');
		}
	}))
	.pipe(sass())
	// .pipe(sourcemaps.write())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(grouping())
	.pipe(csscomb())
	.pipe(gulp.dest('public/assets/css'));
});

gulp.task('watch', () => {
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
