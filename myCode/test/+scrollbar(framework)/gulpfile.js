var gulp	= require('gulp'),
	less	= require('gulp-less'),
	del		= require('del');

//Дефолтный таск ---------------------------------------------------+
gulp.task('default', ['clean', 'less']);

//Работа со стилями ------------------------------------------------+
/*У outputStyle есть 4 состояния:
	1) nested - вложенный, по умолчанию 
	2) expanded - развернутый
	3) compact - компактный 
	4) compressed - сжатый.
*/
gulp.task('less', ()=> {
	gulp.src(['*.less']) //выбираем все исходники
		.pipe(less({outputStyle:'expanded'}).on('error',less.logError)) //компилируем и выводим ошибки
		.pipe(gulp.dest('app/css'));
});

//Чистка -----------------------------------------------------------+
gulp.task('clean', ()=> {
	del.sync('app/*');
});

gulp.task('test', ()=> {
	console.log("test!!!");
});