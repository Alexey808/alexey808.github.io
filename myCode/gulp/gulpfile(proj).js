'use strict';

var gulp         = require('gulp'),                 // сам gulp
    less         = require('gulp-less'),            // less
    browserSync  = require('browser-sync'),         // локальный dev сервер
    concat       = require('gulp-concat'),          // для сборки в одну кучу файлов js (перед сж)
    uglify       = require('gulp-uglifyjs'),        // для сжатия JS
    cssnano      = require('gulp-cssnano'),         // для сжатия css
    rename       = require('gulp-rename'),          // для сжатия css
    del          = require('del'),                  // для удаления файлов и папок
    imagemin     = require('gulp-imagemin'),        // для сжатия изображений
    pngquant     = require('imagemin-pngquant'),    // для сжатия изображений.png
    cache        = require('gulp-cache'),           // кеширования

    rigger       = require('gulp-rigger'),          // аналог include если не используем php
    autoprefixer = require('gulp-autoprefixer'),    // для автоматического добавления префиксов
    reload       = browserSync.reload,              //установленно но пока не подкл
    babel        = require('gulp-babel'),           // babel
    browserify   = require('browserify'),           // babel и его зависимости
    babelify     = require('babelify'),             // babel и его зависимости
    source       = require('vinyl-source-stream'),  // babel и его зависимости    
    react        = require('react'),                // react
    es2015       = require('babel-preset-es2015');
    //watch = require('gulp-watch'),    //установленно но пока исп встроенный

//--- ?gulp-react
    /*
babel-preset-es2015
babel-preset-react
babelify
react
vinyl-source-stream
     */
    
// gulp.task('default', function () {
//     return gulp.src('template.jsx')
//         .pipe(react())
//         .pipe(gulp.dest('dist'));
// });

gulp.task('react:build', function () {
    //return browserify({entries: './App.jsx', extensions: ['.jsx'], debug: true})
        //.transform('babelify', {presets: ['es2015', 'react']})
        //.bundle()
        //.pipe(source('main.js'))
        //.pipe(gulp.dest(path.build.react)) //build/js/react/main.js
        console.log(123);
});

// gulp.task('mytask', function() {
//     console.log('Привет, я таск!');
// });
//--- ?babel 
    /*
    gulp.task('default', () => {
        return gulp.src('src/app.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('dist'));
    });
    */


//--- переменная path -> Пути к файлам.

    /* !Так же создадим js объект в который пропишем все нужные нам пути, чтобы при необходимости 
    легко в одном месте их редактировать: */

    var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'build/',
            js: 'build/js/',
            react: 'build/js/react/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/'
        },
        src: { //Пути откуда брать исходники
            html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
            style: 'src/style/main.less',
            img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*',
            react: 'src/js/react/App.jsx'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/**/*.less',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        clean: './build/'
    };

//--- переменная config -> Настройки dev сервера.
    /* !Создадим переменную с настройками нашего dev сервера: */
    var config = {
        server: {
            baseDir: "./build"
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "Frontend_Devil"
    };

//--- таск watch -> Изменение файлов.
    gulp.task('watch', function(){
        gulp.watch([path.watch.html], function(event, cb) {
            gulp.start('html:build');
        });
        gulp.watch([path.watch.style], function(event, cb) {
            gulp.start('style:build');
        });
        gulp.watch([path.watch.js], function(event, cb) {
            gulp.start('js:build');
        });
        gulp.watch([path.watch.img], function(event, cb) {
            gulp.start('image:build');
        });
        gulp.watch([path.watch.fonts], function(event, cb) {
            gulp.start('fonts:build');
        });
    });

//--- таск webserver -> Веб сервер. Релоад.
    gulp.task('webserver', function () {
        browserSync(config);
    });

//--- таск clean -> Очистить build.
    gulp.task('clean', function(cb) {
        del(path.clean, cb);
    });

//--- такс default -> Запуск: build,webserver,watch.
    gulp.task('default', ['clean', 'build', 'webserver', 'watch']);
    //

//--- таск html:build -> Сборка html файлов.
    gulp.task('html:build', function () {
        gulp.src(path.src.html)                 //Выберем файлы по нужному пути
            .pipe(rigger())                     //Прогоним через rigger
            .pipe(gulp.dest(path.build.html))   //Выплюнем их в папку build
            .pipe(reload({stream: true}));      //И перезагрузим наш сервер для обновлений
    });

//--- таск js:build -> Сборка js файлов.
    gulp.task('js:build', function () {
        gulp.src(path.src.js)                   //Найдем наш main файл
            .pipe(rigger())                     //Прогоним через rigger
            //.pipe(sourcemaps.init())          //Инициализируем sourcemap
            .pipe(uglify())                     //Сожмем наш js
            //.pipe(sourcemaps.write())         //Пропишем карты
            .pipe(gulp.dest(path.build.js))     //Выплюнем готовый файл в build
            .pipe(reload({stream: true}));      //И перезагрузим сервер
    });

//--- таск style:guild -> Сборка css файлов.
    gulp.task('style:build', function () {
        gulp.src(path.src.style)                    //Выберем наш main.scss
            //.pipe(sourcemaps.init())              //То же самое что и с js
            .pipe(less())                           //Скомпилируем
            .pipe(autoprefixer())                   //Добавим вендорные префиксы
            .pipe(cssnano())                        //Сожмем
            //.pipe(sourcemaps.write())
            .pipe(gulp.dest(path.build.css))        //И в build
            .pipe(reload({stream: true}));
    });

//--- таск image:build -> Сборка картинок.
    gulp.task('image:build', function () {
        gulp.src(path.src.img)                          //Выберем наши картинки
            .pipe(imagemin({                            //Сожмем их
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()],
                interlaced: true
            }))
            .pipe(gulp.dest(path.build.img))            //И бросим в build
            .pipe(reload({stream: true}));
    });

//--- таск fonts:build -> Собираем шрифты.
    gulp.task('fonts:build', function() {
        gulp.src(path.src.fonts)
            .pipe(gulp.dest(path.build.fonts))
    });

//--- таск build -> Запуск тасков build:html,js,style,image,fonts.
    gulp.task('build', [
        'html:build',
        'js:build',
        'style:build',
        'fonts:build',
        'image:build'
    ]);

