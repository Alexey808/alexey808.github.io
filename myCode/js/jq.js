//Перебор элементов класса .myclass
$('.myclass').each(function(index){ /*code*/ });
//получение аттрибута value
var val = $(this).attr('value');
//всем дивкам класса .info установить серый цвет
$('div.info').css('background','grey');