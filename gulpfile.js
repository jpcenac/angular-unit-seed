/**
 * Created by Jay on 6/14/2016.
 */
var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('default', function() {
    gulp
        .src('./src/index.html')
        .pipe(wiredep({"overrides":{
            "bootstrap":{
                "main":[
                    "dist/css/bootstrap.min.css"
                ]
            }}}))
        .pipe(gulp.dest('./src/'));

});