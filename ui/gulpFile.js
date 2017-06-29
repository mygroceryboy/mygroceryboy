var gulp = require("gulp");
var vulcanize = require("gulp-vulcanize");
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');

gulp.task("copy", function () {
    return gulp.src([
        "src/bower_components/webcomponentsjs/webcomponents-lite.js"
    ])
    .pipe(gulp.dest("src/dist"));
});

// gulp.task('compress', function() {
//   gulp.src('src/bower_components/**/*.js')
//     .pipe(minify())
//     .pipe(gulp.dest('src/bower_components'))
// });

// gulp.task('minify', function() {
//   return gulp.src('src/dist/*.html')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('src/dist'));
// });

gulp.task("vulcanize", function () {
    return gulp.src("src/polymer-components.html")
        .pipe(vulcanize({
            stripComments: true,
            inlineCss: true,
            inlineScripts: true
        }))
        .pipe(gulp.dest("src/dist"));
});

gulp.task("default", ["vulcanize", "copy"]);
// gulp.task("default", ["compress","vulcanize", "copy", "minify"]);