var gulp = require("gulp");
var vulcanize = require("gulp-vulcanize");
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');
var minifyInline = require('gulp-minify-inline');

gulp.task("copy", function () {
    return gulp.src([
        "src/bower_components/webcomponentsjs/webcomponents-lite.js"
    ])
    .pipe(gulp.dest("src/dist"));
});

gulp.task("vulcanize", function () {
    return gulp.src("src/polymer-components.html")
        .pipe(vulcanize({
            stripComments: true,
            inlineCss: true,
            inlineScripts: true
        }))
        .pipe(minifyInline())
        .pipe(gulp.dest("src/dist"));
});

gulp.task("default", ["vulcanize", "copy"]);