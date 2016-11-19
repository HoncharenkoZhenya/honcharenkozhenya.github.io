var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require('browser-sync'),
    iconfont = require("gulp-iconfont"),
    consolidate = require("gulp-consolidate"),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        style: 'src/scss/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        icons: 'src/icons/*.svg'
    },
    watch: {
        html: 'src/**/*.html',
        style: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    'use strict';
    browserSync(config);
});

gulp.task('html:build', function () {
    'use strict';
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    'use strict';
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['src/scss/'],
            outputStyle: 'compressed',
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    'use strict';
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function () {
    'use strict';
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task("icons:build", function () {
    'use strict';
    return gulp.src(path.src.icons)
        .pipe(iconfont({
            fontName: "myiconic",
            formats: ["ttf", "eot", "woff", "svg"],
            centerHorizontally: true,
            fixedWidth: true,
            normalize: true
        }))
        .on("glyphs", (glyphs) => {
           gulp.src("./src/icons/util/*.scss")
               .pipe(consolidate("lodash", {
                   glyphs: glyphs,
                   fontName: "myiconic",
                   fontPath: "../fonts/"
               }))
               .pipe(gulp.dest("./src/scss/icons/")); // generated scss files with classes
        })
        .pipe(gulp.dest("./src/fonts/")); // icon font destination
});

gulp.task('build', [
    'html:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function(){
    'use strict';
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});



gulp.task('default', ['build', 'webserver', 'watch']);

