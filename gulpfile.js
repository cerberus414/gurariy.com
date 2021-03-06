const gulp = require('gulp');
const sass = require('gulp-sass'); // Requires installation of node-gyp to work. (e.g. npm install -g node-gyp@latest)
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('assets', function() {
    gulp.src('./resources/assets/**/*')
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('styles', function() {
    gulp.src('./resources/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('scripts', function() {
    /* 
        1. Transpile JSX, ES6 into ES5
        2. Traverse require() dependency tree and bundle all JS files into a singular JS file
        3. Minify JS file
        4. Move file to public directory
    */
    browserify('./app/index.js', { debug: true })
        .transform(babelify)
        .bundle()
        .on('error', function(err) { console.error(err); })
        .pipe(source('site.js')) // TODO: Research vinyl source streams.
        .pipe(gulp.dest('./public/scripts'));
});

gulp.task('watch', function() {
    gulp.watch('./app/**/*.{js,jsx}', ['scripts']);
    gulp.watch('./resources/styles/**/*.scss', ['styles']);
});

gulp.task('compile', ['assets', 'styles', 'scripts']);

// Usage: gulp default
gulp.task('default', ['compile', 'watch']);