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



//---
$('.dial').attr('style', 'background: red !important');
$('.dial').style('color', 'red', 'important');






//----
addImportantStyle('.element', 'border: 1px solid #000; height: 50px !important;')


