module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./dev/static/sass/main.sass')
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/static/css/'))
    });

    var gcmq = require('gulp-group-css-media-queries');

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/sass/*.{sass,css}')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 version']
            }))
            .pipe(gcmq())
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};