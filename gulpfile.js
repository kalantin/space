const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const clean = require('gulp-clean');
const kit = require('gulp-kit');

const paths = {
	sassCss: './src/sass/**/*.scss',
	js: './src/js/**/*.js',
	img: './src/img/*',
	dist: './dist',
	html: './html/**/*.kit'
};

function sassCompiler(done) {
	src(paths.sassCss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(sourcemaps.write())
		.pipe(dest('./dist/css'));
	done();
}

function js(done) {
	src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(dest('./dist/js'));
	done();
}
function img(done) {
	src('./src/img/**/*').pipe(imagemin()).pipe(dest('./dist/img'));
	done();
}
function handleKits(done) {
	src(paths.html).pipe(kit()).pipe(dest('./'));
	done();
}
function cleanStuffs(done) {
	src(paths.dist, { read: false }).pipe(clean());
	done();
}
function startBrowserSync(done) {
	browserSync.init({
		server: {
			baseDir: './',
		},
	});
	done();
}
function watchChanges(done) {
	watch('./*.html').on('change', reload);
	watch(
		[paths.sassCss, paths.html, paths.js],
		parallel(handleKits, sassCompiler, js)
	).on('change', reload);
	watch(paths.img, img).on('change', reload);
	done();
}
const mainFunctions = parallel(handleKits, sassCompiler, js, img);
exports.cleanStuffs = cleanStuffs;
exports.default = series(mainFunctions, startBrowserSync, watchChanges);
