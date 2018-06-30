module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/*.{png,jpg,gif,svg}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('6p3iVDadoU6owb6Bj3e4F8ugfg58l9_T'))
            .pipe($.gulp.dest('./build/static/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/static/img/*.svg')
            .pipe($.gulp.dest('./build/static/img/'));
    });
};