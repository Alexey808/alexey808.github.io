var gulp	= require('gulp'),
	sass	= require('gulp-sass'),
	del		= require('del');

//Дефолтный таск ---------------------------------------------------+
gulp.task('default', ['clean', 'sass']);

//Работа со стилями ------------------------------------------------+
/*У outputStyle есть 4 состояния:
	1) nested - вложенный, по умолчанию 
	2) expanded - развернутый
	3) compact - компактный 
	4) compressed - сжатый.
*/
gulp.task('sass', ()=> {
	gulp.src(['css/*.sass', 'css/*.scss']) //выбираем все исходники
		.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError)) //компилируем и выводим ошибки
		.pipe(gulp.dest('app/css'));
});

//Чистка -----------------------------------------------------------+
gulp.task('clean', ()=> {
	del.sync('app/*');
});

gulp.task('test', ()=> {
	console.log("test!!!");
});