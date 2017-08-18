//добавление класса элементу
$(this).addClass('test');
//Перебор элементов класса .myclass
$('.myclass').each(function(index){ /*code*/ });
//получение аттрибута value
var val = $(this).attr('value');
//всем дивкам класса .info установить серый цвет
$('div.info').css('background','grey');
//удаление аттрибута
$('.myClass').removeAttr('nameAttr');



//использование стиля в связке с !important
$('.dial').attr('style', 'background: red !important');
$('.dial').style('color', 'red', 'important');
$('.dial').attr('style', $('.dial').attr('style') + ';' + 'color: red !important');
$('.dial').style.setProperty( 'color', 'green', 'important' );
$( '.test').each(function () {this.style.setProperty( 'color', 'blue', 'important' ); });



//----
addImportantStyle('.element', 'border: 1px solid #000; height: 50px !important;')


