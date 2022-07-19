// const gulp        = require('gulp');
// const browserSync = require('browser-sync').create();
// const sass        = require('gulp-sass');

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./app"
//     });

//     gulp.watch("app/scss/*.scss", ['sass']);
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("app/css"))
//         .pipe(browserSync.stream());
// });

// gulp.task('default', ['serve']);

























const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function() {
  return gulp.src('natalygep.github.io/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('natalygep.github.io/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("natalygep.github.io/scss/*.scss", ['sass']);
    gulp.watch("natalygep.github.io/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'styles'));
// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };

