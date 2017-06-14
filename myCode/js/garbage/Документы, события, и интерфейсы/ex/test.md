<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset='utf-8'>
</head>
<body>

+----------------------------------------------------------+
| Cовокупность браузерных объектов												 |
| http://learn.javascript.ru/browser-environment					 |
+----------------------------------------------------------+
|																													 |
|										  +--------------+										 |
|					+-----------|    window    |-----------+				 |
|					|					  +--------------+					 |				 |
|					|			 							|									 |				 |
|			DOM	|								BOM	|								 JS|				 |
|		+----------+    +-----------------+    +-----------+	 |
|		| document |		|	navigator 			|		 |	Object 	 | 	 |
|   +----------+		|	screen					|		 |	Array    |	 |
|										|	location				|		 |	Function |   |
|										|	frames    			|		 +-----------+	 |
|										|	history 				|										 |
|										|	XMLHttpRequest 	|										 |
|										+-----------------+										 |
|																													 |
+----------------------------------------------------------+



DOM - (Document Object Model — «объектная модель документа») это не зависящий от платформы и 
	языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому 
	HTML-, XHTML- и XML-документов... На текущей момент 2016г готовится (DOM 4 level).
BOM – это объекты для работы с чем угодно, кроме документа.
	<script>

//Глобальный объект window -------------------------------------------------------------------------
	window.open('http://ya.ru'); //открыть новую вкладку с указанным адресом
//Объектная модель браузера (BOM) ------------------------------------------------------------------
	alert( location.href ); // выведет текущий адрес

	</script>


<!-- Объектная модель документа (DOM) -->
!Таблицы всегда содержат <tbody>. Важно знать об этом, иначе при работе с таблицами возможны сюрпризы.
!DOM нужен для того, чтобы манипулировать страницей – читать информацию из HTML, создавать и изменять элементы.

Всего различают 12 типов узлов, но на практике мы работаем с четырьмя из них:
	Документ – точка входа в DOM.
	Элементы – основные строительные блоки.
	Текстовые узлы – содержат, собственно, текст.
	Комментарии – иногда в них можно включить информацию, которая не будет показана, но доступна из JS



### Навигация ###
	Первый этап:
		document.documentElement - получить html узел. Первая точка входа.
		document.head - получить head. Первая точка входа.
		document.body - получить body. Вторая точка входа.

	Второй этап:
		childNodes - (Псевдо-массив)хранит все дочерние элементы, включая текстовые.
		children - только дочерние узлы-элементы, то есть соответствующие тегам.
		parentNode - доступ к родителю
		parentElement – родитель-элемент.

		firstElementChild - первый дочерний эелемент
		lastElementChild - последний дочерний эелемент

		previousElementSibling - предыдущий эелемент
		nextElementSibling - следующий эелемент

		firstChild - обеспечивают быстрый доступ к первому элементу
		lastChild - обеспечивают быстрый доступ к последнему элементу

		previousSibling - доступ к эелементу слева
		nextSibling - доступ к эелементу справа

		document.body.lastElementChild

	Примерно выглядит так:
			document.documentElement.children[0]

### Работа с таблицей ###

	TABLE
		table.rows – коллекция строк TR таблицы
		table.caption – ссылка на элемент таблицы CAPTION.
		table.tHead – ссылка на элемент таблицы THEAD.
		table.tFoot – ссылка на элемент таблицы TFOOT.
		table.tBodies – коллекция элементов таблицы TBODY, по спецификации их может быть несколько.

	THEAD/TFOOT/TBODY
		tr.cells – коллекция ячеек TD/TH
		tr.sectionRowIndex – номер строки в текущей секции THEAD/TBODY
		tr.rowIndex – номер строки в таблице

	TD/TH
		td.cellIndex – номер ячейки в строке

### Поиск эелементов ###
	!95% ситуаций достаточно querySelector/querySelectorAll. Хотя более специализированные 
		методы getElement* работают чуть быстрее, но разница в миллисекунду-другую редко играет роль.

	+---------------------------------------------------------------+
	|								#Оновные методы поиска по DOM#									|
	+---------------------------------------------------------------+
	|	Метод	Ищет по...				Ищет внутри элемента?			Поддержка		|
	+---------------------------------------------------------------+	
	|	getElementById					id						-						везде				|
	|	getElementsByName				name					-						везде				|
	|	getElementsByTagName		тег или '*'		✔						везде				|
	|	getElementsByClassName	классу				✔						кроме IE8-	|
	|	querySelector						CSS-селектор	✔						везде				|
	|	querySelectorAll				CSS-селектор	✔						везде				|
	+---------------------------------------------------------------+	

	> Метод elem.getElementById(id) возвращает ссылку на элемент по его идентификатору (ID);

	> Вызов document.getElementsByName(name) позволяет получить все элементы с данным атрибутом name. 
  




	> Метод elem.getElementsByTagName(tag) ищет все элементы с заданным тегом tag внутри элемента 
		elem и возвращает их в виде списка. Буква "s" не нужна там, где элемент только один, то 
		есть в getElementById, в остальных методах она обязательна. Может быть вызыван и в 
		контексте определённого эелемента.

	> Вызов elem.getElementsByClassName(className) возвращает коллекцию элементов с классом className. 
		Находит элемент и в том случае, если у него несколько классов, а искомый – один из них. кроме IE8-.
		Может быть вызыван и в контексте определённого эелемента.
dsad[^1]
	> Вызов elem.querySelector(css) возвращает не все, а только первый элемент, соответствующий 
			CSS-селектору css. Иначе говоря, результат – такой же, как и при elem.querySelectorAll(css)[0], 
			но в последнем вызове сначала ищутся все элементы, а потом берётся первый, 
			а в elem.querySelector(css) ищется только первый, то есть он эффективнее.
 

> Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem, удовлетворяющие 
		CSS-селектору css. Псевдо-классы в CSS-селекторе, в частности :hover и :active, 
		также поддерживаются. Один из самых используемых методов при работе с DOM. Есть везде включая IE8+.


	# Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM, подходящий под 
		CSS-селектор css. Сам элемент тоже включается в поиск. Используется редко.
* [Метод elem.matches(css)]( dsadsaaaa)ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. 
		Он возвращает true либо false. Не поддерживается в IE8-. Старое название matchesSelector, 
		возможно некоторые браузеры поддерживают с префиксами.

	> XPath - язык запросов. Так как XPath сложнее и длиннее CSS, то используют его очень редко.
_123123123_
---

<script>

		//показать первый эелемент в выбранной вкладке в коносоли --------------------------------------
			console.log($0);

		//задать красный цвет первому эелементу---------------------------------------------------------
			$0.style.backgroundColor = 'red';
		
		//вывести все div-ки ---------------------------------------------------------------------------
			console.log($$("div"));
		
		//задать стиль, цвет фона body -----------------------------------------------------------------
			document.body.style.background = 'red'; //зделать body красным
			document.body.style.background = ''; //зделать body бесцветным(стандартым)

		//Псевдо-массив childNodes. Последовательно вывести дочерние элементы body ---------------------
	    for (var i = 0; i < document.body.childNodes.length; i++) {
	      alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
	    }

    //Как к псевдо-массиву childNodes применить методы массива--------------------------------------
    	
    	//Сопосб 1. Применить метод массива через call/apply-----------------------------------------+
			var elems = document.documentElement.childNodes;

			[].forEach.call(elems, function(elem) {
			  alert( elem ); // HEAD, текст, BODY
			});

			//Способ 2. При помощи Array.prototype.slice сделать из коллекции массив. -------------------+
			var elems = document.documentElement.childNodes;
			elems = Array.prototype.slice.call(elems); // теперь elems - массив

			elems.forEach(function(elem) {
			  alert( elem.tagName ); // HEAD, текст, BODY
			});

    //свойства firstChild и lastChild --------------------------------------------------------------
			var elem = document.documentElement;
	    elem.childNodes[0] === elem.firstChild //true
			elem.childNodes[elem.childNodes.length - 1] === elem.lastChild //true

		//children -------------------------------------------------------------------------------------
			var elem = document.documentElement;
			elem.firstElementChild === elem.children[0] //true
			elem.lastElementChild === elem.children[elem.children.length - 1] //true

		//перебор с помощью children--------------------------------------------------------------------
	    /*в IE8- в узлах присутствую коментарьи, могут возникнуть сложности.*/ 
	    for (var i = 0; i < document.body.children.length; i++) {
	      alert( document.body.children[i] ); // DIV, UL, DIV, SCRIPT
	    }

	  //Работа с таблицей ----------------------------------------------------------------------------
			//Пример использования
			/*
				<table>
				  <tr>
				    <td>один</td> <td>два</td>
				  </tr>
				  <tr>
				    <td>три</td>  <td>четыре</td>
				  </tr>
				</table>
			*/
			var table = document.body.children[0];
			alert( table.rows[0].cells[0].innerHTML ) // "один"
		
		//z. Покрасить ячейки таблицы по диоганали -----------------------------------------------------
			/*
		  <table>
		    <tr>
		      <td>1:1</td>
		      <td>2:1</td>
		      <td>3:1</td>
		      <td>4:1</td>
		      <td>5:1</td>
		    </tr>
		    <tr>
		      <td>1:2</td>
		      <td>2:2</td>
		      <td>3:2</td>
		      <td>4:2</td>
		      <td>5:2</td>
		    </tr>
		    <tr>
		      <td>1:3</td>
		      <td>2:3</td>
		      <td>3:3</td>
		      <td>4:3</td>
		      <td>5:3</td>
		    </tr>
		    <tr>
		      <td>1:4</td>
		      <td>2:4</td>
		      <td>3:4</td>
		      <td>4:4</td>
		      <td>5:4</td>
		    </tr>
		    <tr>
		      <td>1:5</td>
		      <td>2:5</td>
		      <td>3:5</td>
		      <td>4:5</td>
		      <td>5:5</td>
		    </tr>
		  </table>
			*/
		
	  	//Получить таблицу
	  	var table = document.body.children[0];
	  	//где table.rows.length это количество строк в таблице, т.е.=5
	   	for (var i=0; i<table.rows.length; i++) {
	   		table.rows[i].cells[i].style.backgroundColor = 'green';
	   	}
	   	
		//z. Проверка существования деталей ------------------------------------------------------------
			
			//способ 1. Через свойство length -----------------------------------------------------------+
				if (!elem.childNodes.length) { ... }
				//или он же в другом виде
				document.documentElement.childNodes.length != 0
			
			//способ 2. Через метод hasChildNodes() -----------------------------------------------------+
				document.documentElement.hasChildNodes()

		//Работа с элементами ==========================================================================

			//getElementById ----------------------------------------------------------------------------+
			document.getElementById('content'); //поиск по id 
			
			//getElementByTagName и getElementsByTagName (см разницу s) ---------------------------------+
			document.getElementsByTagName('div'); //массив из выбранного тега можно искать внутри любова
			document.getElementsByTagName('*');// получить все элементы документа
			elem.getElementsByTagName('*');// получить всех потомков элемента elem:
			document.getElementsByTagName('input')[0].value = 5; //присваивание значение эелементу

			//getElementsByName, Используется этот метод весьма редко.-----------------------------------+
			document.getElementsByName('age'); //все элементы с именем age
			
			//querySelectorAll---------------------------------------------------------------------------+
			document.querySelectorAll('ul > li:last-child'); //все элементы LI, последние потомками в UL
			document.querySelectorAll(':hover'); //вложенный список из текущих элементов под курсором

			//querySelector -----------------------------------------------------------------------------+
			document.querySelector(".myclass"); //первый элемент с классом "myclass"
			
			//matches -----------------------------------------------------------------------------------+
			var elems = document.body.children;
			for (var i = 0; i < elems.length; i++) {
				if (elems[i].matches('a[href$="zip"]')) { //соответствует ли ссылка zip или нет
					...} 
			}

			//Пример, поиск по id, старый способ ---------------------------------------------------------
				/*
				<div id="content-holder">
				  <div id="content">Элемент</div>
				</div>	
				*/
			
				/*устарело*/ console.log(content); //<div id="content-holder">
				/*устарело*/ console.log(window['content-holder']); //<div id="content">

			//Пример, getElementById+getElementsByTagName Поиск элементов внутри таблицы -----------------
				/*
					<table id="age-table">
					  <tr>
					    <td>Ваш возраст:</td>

					    <td>
					      <label>
					        <input type="radio" name="age" value="young" checked> младше 18
					      </label>
					      <label>
					        <input type="radio" name="age" value="mature"> от 18 до 50
					      </label>
					      <label>
					        <input type="radio" name="age" value="senior"> старше 60
					      </label>
					    </td>
					  </tr>

					</table>
				*/
		
			  var tableElem = document.getElementById('age-table');
			  var elements = tableElem.getElementsByTagName('input');

			  for (var i = 0; i < elements.length; i++) {
			    var input = elements[i];
			    alert( input.value + ': ' + input.checked );
			  }

			//Пример, getElementsByName, кроме IE8-. -----------------------------------------------------
				/*
					<div class="article">Статья</div>
					<div class="long article">Длинная статья</div>
				*/
				var articles = document.getElementsByClassName('article');
				alert( articles.length ); // 2, найдёт оба элемента

			//Пример, querySelectorAll, Есть везде включая IE8+. -----------------------------------------
				/*
					<ul>
					  <li>Этот</li>
					  <li>тест</li>
					</ul>
					<ul>
					  <li>полностью</li>
					  <li>пройден</li>
					</ul>
				*/
			  var elements = document.querySelectorAll('ul > li:last-child');

			  for (var i = 0; i < elements.length; i++) {
			    alert( elements[i].innerHTML ); // "тест", "пройден"
			  }
		
			//Пример, closest ----------------------------------------------------------------------------
				/*
					<ul>
					  <li class="chapter">Глава I
					    <ul>
					      <li class="subchapter">Глава <span class="num">1.1</span></li>
					      <li class="subchapter">Глава <span class="num">1.2</span></li>
					    </ul>
					  </li>
					</ul>
				*/

			  var numberSpan = document.querySelector('.num');

			  // ближайший элемент сверху подходящий под селектор li
			  alert(numberSpan.closest('li').className) // subchapter

			  // ближайший элемент сверху подходящий под селектор .chapter
			  alert(numberSpan.closest('.chapter').tagName) // LI

			  // ближайший элемент сверху, подходящий под селектор span
			  // это сам numberSpan, так как поиск включает в себя сам элемент
			  alert(numberSpan.closest('span') === numberSpan) // true

			//Пример xPeapx ------------------------------------------------------------------------------
				//Найдем заголовки <h2> с текстом XPath в текущем документе
				var result = document.evaluate("//h2[contains(., 'XPath')]", document.documentElement, null,
				  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

				for (var i = 0; i < result.snapshotLength; i++) {
				  alert( result.snapshotItem(i).outerHTML );
				}

</script>
	</script>

</body>
</html>





Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM, подходящий под 
		CSS-селектор css. Сам элемент тоже включается в поиск. Используется редко.

['dsadsa']


----------------------------------------------------------
Разберём адрес http://realadmin.ru/saytostroy/?page=4#top

document.location.href			http://realadmin.ru/saytostroy/?page=4#top
document.location.protocol	http:
document.location.host			realadmin.ru
document.location.pathname	/saytostroy/
document.location.search		?page=4
document.location.hash			#top
-------------------------------------------------------------

## Overview

* [Installation](#installation)
* [Features](#features)
* [Key Bindings](#key-bindings)
* [GFM Specific Features](#gfm-specific-features)
* [Commands for Command Palette](#commands-for-command-palette)
* [Configuration](#configuration)
* [Tips](#tips)
* [Similar Plugins](#similar-plugins)
* [Known Bugs](#known-bugs)
* [Contributing](#contributing)
* [Credits](#credits)
* [Donation](#donation)
* [License](#license) 

-------------------------------------------------------------
-------------------------------------------------------------
-dfsdfsaf
	[123]
* [License](#license) 
rerew
	> 312321
	31231231

## Overview
* [		dsadsadasd    ]( dsadsa )

[^1]: 

#### 123
_dsadsa_
'dsds'

--------------------

~~~

	function()

~~~

~~
# 3213!
123
~~
# dsadsadasd
* 113123 
* 
* 123132
* 1231321
* 

# fdsfdsf
* 123
* 123
* 123
[1323]


_3412![![![![]()]()]()]()312_
![]()
![123321](312312312)
_321321_
_fdfdsfdsf_
__123132123__



### 123
dsad
1ddsadsa23![![![![![]()]()]()]()]()
## 14
##### 12

# 123123 3123123 __

![]()
---

-----

```
dsada
dsa
d

dsadsa
	fdsfsd
	fdsfsdfsdf
	fdsfsdfsfs


sdadasd```


