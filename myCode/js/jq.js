
$(this).addClass('test'); //добавление класса элементу
$(this).removeClass('test'); //удаление класса у элемента
$('.myclass').each(function(index){ /*code*/ }); //Перебор элементов класса .myclass
var val = $(this).attr('value'); //получение аттрибута value
$('div.info').css('background','grey'); //всем дивкам класса .info установить серый цвет
$('.myClass').removeAttr('nameAttr'); //удаление аттрибута

/* получить родительский блок */
$("#block").parent()	//вернет родителя элемента с идентификатором block.
$("div").parent()	//вернет родительские элементы всех div-ов.
$("div").parent(".lBlock")	//вернет элементы класса lBlock, которые являются родительскими для div-элементов на странице.

$(".elem").parent().find(".childClass"); //Получить родителя и найти в нем элемент по классу

/* использование стиля в связке с !important */
$('.dial').attr('style', 'background: red !important');
$('.dial').style('color', 'red', 'important');
$('.dial').attr('style', $('.dial').attr('style') + ';' + 'color: red !important');
$('.dial').style.setProperty( 'color', 'green', 'important' );
$( '.test').each(function () {this.style.setProperty( 'color', 'blue', 'important' ); });



//----
addImportantStyle('.element', 'border: 1px solid #000; height: 50px !important;')


