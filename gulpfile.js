const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const csscomb = require('gulp-csscomb');
const grouping = require('gulp-group-css-media-queries');

const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

gulp.task('sass', () => {
	return gulp.src('sass/**/*.scss')
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

gulp.task('sass:watch', () => {
	return gulp.watch('sass/**/*.scss', ['sass']);
});


gulp.task('webpack', () => {
	return webpackStream(webpackConfig, webpack).pipe(gulp.dest('public/assets/js'));
});

gulp.task('webpack:watch', () => {
	return gulp.watch(['src/**/*.js', 'src/**/*.vue'], ['webpack']);
});


gulp.task('default', ['sass', 'webpack', 'sass:watch', 'webpack:watch']);
