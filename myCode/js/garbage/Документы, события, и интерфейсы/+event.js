+ShortEvent.js 
		elem.addEventListener("click", myFunc); //назначение обработчика

		elem.removeEventListener("click", myFunc); //удаление обработчика


		


### Некоторые события ###

	+События мыши:
		click – происходит, когда кликнули на элемент левой кнопкой мыши
		contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
		mouseover – возникает, когда на элемент наводится мышь
		mousedown и mouseup – когда кнопку мыши нажали или отжали
		mousemove – при движении мыши

	+События на элементах управления:
		submit – посетитель отправил форму <form>
		focus – посетитель фокусируется на элементе, например нажимает на <input>

	+Клавиатурные события:
		keydown – когда посетитель нажимает клавишу
		keyup – когда посетитель отпускает клавишу

	+События документа:
		DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

	+События CSS:
		transitionend – когда CSS-анимация завершена.



## Назначение обработчика, есть 3 способа. ##
!Не использовать setAttribute() при назначении обработчика, т.к. функц будет преобразована в строку.
*event - Имя события, например click
*handler - Ссылка на функцию, которую надо поставить обработчиком.
*phase - Необязательный аргумент, «фаза», на которой обработчик должен сработать. Этот аргумент редко нужен.

	//Атрибут HTML, (возможет только 1 обработчик): ---------------------------
	onclick="myFunc()"

	//Свойство, (возможет только 1 обработчик): -------------------------------
	elem.onclick = myFunc;

	//Спец-методы, (возможно испо неск обработчиков): -------------------------
	
		//Современный, назначение | element.addEventListener(event, handler[, phase]);
		elem.addEventListener( event, handler[, phase]);
		//Удаление события | передать те же аргументы, что были у addEventListener
		elem.removeEventListener(event, handler[, phase]);

		//Для старых IE8-
		IE8-: elem.attachEvent( on+событие, handler ) //назначение
		detachEvent //удаление


//--- Пример назначения через атрибут. -------------------------------------------------------------+
  	<input value="Нажми меня" onclick="sayThanks()" type="button"> // при указ функц () обязат.
		function sayThanks() {
	  		alert( 'Спасибо!' );
		}

//--- Пример назначения через DOM свойство. --------------------------------------------------------+
  	<input id="elem" type="button" value="Нажми меня" />
  	<script>
		function sayThanks() {
	  		alert( 'Спасибо!' );
		}
		elem.onclick = sayThanks; //Функция должна быть присвоена как sayThanks, а не sayThanks().
  	</script>

//--- Пример назначения через метод addEventListener() ---------------------------------------------+
	<input id="elem" type="button" value="Нажми меня" />
	<script>
		function sayThanks1() {
			alert( 'Спасибо!' );
		};
		function sayThanks2() {
			alert( 'Спасибо! ещё раз' );
		}
		elem.addEventListener("click", sayThanks1); //назначение
		elem.addEventListener("click", sayThanks2); //назначение
		//...
		elem.removeEventListener("click", sayThanks1); //удаление
		
	</script>

//--- Доступ к элементу через this. ---------------------------------------------------------------+
	<button onclick="alert(this.innerHTML)">Нажми меня</button>

