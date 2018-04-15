/*
### Создание узлов ###
    document.createElement(tag) - Создать элемент с тегом tag
    document.createTextNode(txt) - Создать текстовый узел с текстом txt
    node.cloneNode(deep) - Клонировать существующий узел, если deep=false, то без потомков.

### Свойства узлов ###
    node.nodeType - Тип узла: 1(элемент) / 3(текст) / другие.
    elem.tagName - Тег элемента.
    elem.innerHTML - HTML внутри элемента.
    elem.outerHTML - Весь HTML элемента, включая сам тег.
    node.data / node.nodeValue - Содержимое узла любого типа, кроме элемента.
    node.textContent - Текстовое содержимое узла, для элементов содержит текст с вырезанными тегами (IE9+).
    elem.hidden - Если поставить true, то элемент будет скрыт (IE10+).

### Атрибуты ###
    elem.getAttribute(name) - Чтение атрибута.
    elem.hasAttribute(name) - Проверка атрибута.
    elem.setAttribute(name, value) - Запись атрибута.
    elem.removeAttribute(name) – удаление атрибута
    elem.dataset.* - Значения атрибутов вида data-* (IE10+).

### Ссылки ###
    document.documentElement - Элемент <HTML>
    document.body - Элемент <BODY>
    document.head - Элемент <HEAD> (IE9+)

По всем узлам:
    elem.parentNode - получить родительский элемент
    nextSibling previousSibling
    childNodes firstChild lastChild

Только по элементам:
    nextElementSibling - получить следующий элемент
    previousElementSibling - получить предыдущий элемент
    
    parentElement
    nextElementSibling previousElementSibling
    children, firstElementChild lastElementChild

В таблицах:
    table.rows[N] - строка TR номер N.
    tr.cells[N] - ячейка TH/TD номер N.
    tr.sectionRowIndex - номер строки в таблице в секции THEAD/TBODY.
    td.cellIndex - номер ячейки в строке.

### Поиск ###
    *.querySelector(css) - (в 99% случаев хватает этих двух) По селектору, только первый элемент
    *.querySelectorAll(css) - (в 99% случаев хватает этих двух) По селектору CSS3, в IE8 по CSS 2.1
    document.getElementById(id) - По уникальному id
    document.getElementsByName(name) - По атрибуту name, в IE9- работает только для элементов, где name предусмотрен стандартом.
    *.getElementsByTagName(tag) - По тегу tag
    *.getElementsByClassName(class) - По классу, IE9+, корректно работает с элементами, у которых несколько классов.
    elem.matches(css) - Проверяет, подходит ли элемент под CSS-селектор.
    elem.closest(css) - Ищет ближайший элемент сверху по иерархии DOM, подходящий под CSS-селектор. Первым проверяется сам elem. Этот элемент возвращается.
    elemA.contains(elemB) - Возвращает true, если elemA является предком (содержит) elemB.
    elemA.compareDocumentPosition(elemB) - Возвращает битовую маску, которая включает в себя отношение вложенности между elemA и elemB, а также – какой из элементов появляется в DOM первым.

### Изменение ###

    parent.appendChild(newChild) - добавление узла
    parent.removeChild(child) - удаление узла
    parent.insertBefore(newChild, refNode) - изменение узла
    parent.insertAdjacentHTML("beforeBegin|afterBegin|beforeEnd|afterEnd", html)
    parent.insertAdjacentElement("beforeBegin|...|afterEnd", text) (кроме FF)
    parent.insertAdjacentText("beforeBegin|...|afterEnd", text) (кроме FF)
    document.write(...)

    Скорее всего, понадобятся полифиллы для:
    node.append(...nodes)
    node.prepend(...nodes)
    node.after(...nodes)
    node.before(...nodes)
    node.replaceWith(...nodes)

    
### Классы и стили ###

    elem.className - Атрибут class
    elem.classList.add(class) - Управление классами, для IE9- есть эмуляция.
    remove(class) - Управление классами, для IE9- есть эмуляция.
    toggle(class) - Управление классами, для IE9- есть эмуляция.
    contains(class) - Управление классами, для IE9- есть эмуляция.

    elem.style - Стили в атрибуте style элемента
    getComputedStyle(elem, "") - Стиль, с учётом всего каскада, вычисленный и применённый (только чтение)

### Размеры и прокрутка элемента ###

    clientLeft/Top - Ширина левой/верхней рамки border
    clientWidth/Height - Ширина/высота внутренней части элемента, включая содержимое и padding, не включая полосу прокрутки (если есть).
    scrollWidth/Height - Ширина/высота внутренней части элемента, с учетом прокрутки.
    scrollLeft/Top - Ширина/высота прокрученной области.
    offsetWidth/Height - Полный размер элемента: ширина/высота, включая border.


### Размеры и прокрутка страницы ###

    document.documentElement.clientHeight - ширина/высота видимой области
    window.pageYOffset || document.documentElement.scrollTop - прокрутка(чтение)

    прокрутка(изменение):
    window.scrollBy(x,y): на x,y относительно текущей позиции.
    window.scrollTo(pageX, pageY): на координаты в документе.
    elem.scrollIntoView(true/false): прокрутить, чтобы elem стал видимым и оказался вверху окна(true) или внизу(false)

### Координаты ###

    elem.getBoundingClientRect() - относительно окна
    elem.getBoundingClientRect()+прокрутка страницы - относительно документа
    document.elementFromPoint(clientX, clientY) - получить элемент по координатам
*/



--- ПРОВЕРКА ---
    document.documentElement.hasChildNodes();   //Проверка на дочерние элементы
    document.body.children[0].type;             //Проверка поддержки типа атрибута


    //Класс узла
        alert( document.body instanceof HTMLBodyElement );     // true
        alert( document.body instanceof HTMLElement );         // true
        alert( document.body instanceof Element );             // true
        alert( document.body instanceof Node );                // true


--- ПОИСК ---
    $0;                                                     //получить 1 эелемент
    $$("div");                                              //получить все элементы div
    document.body.childNodes;                               //получить псевдо-массив из всех дочерних элементов body
    document.getElementById('elem');                        //поиск по id 
    document.getElementsByTagName('div');                   //получить массив из выбранного тега
    document.getElementsByTagName('*');                     // получить все элементы 
    elem.getElementsByTagName('*');                         // получить всех потомков элемента 
    document.getElementsByName('age');                      //получить все элементы с именем age
    document.querySelectorAll('ul > li:last-child');        //получить все элементы LI, последние потомками в UL
    document.querySelector(".myclass");                     //получить первый элемент с классом "myclass"
    ul.querySelector('li:nth-child(2)');                    //получить второй элемент в ul
    ul.getElementsByTagName('li')[1];                       //получить второй элемент в ul
    elem.closest("div");                                    //получить ближайших элемент в элементе
    elem.hasChildNodes();                                   //проверка на дочерние узлы, true/false
    //numberSpan.closest('li').className                    //Получить ближайший элемент li с выбранным классом [className/tagName]
    elem.closest("#div");
    document.getElementsByTagName('input')[0].value = 5;    //присваивание значение эелементу

--- ПАРС АДРЕСНОЙ СТРОКИ ---
    location.reload();          //обновление страницы
    var url = location;         //document.getElementsByTagName('a')[0];

    console.log(
    url.href + '\n' +           // the full URL
    url.protocol + '\n' +       // http:
    url.hostname + '\n' +       // site.com
    url.port + '\n' +           // 81
    url.pathname + '\n' +       // /path/page
    url.search + '\n' +         // ?a=1&b=2
    url.hash                    // #hash
    );    

    --- СОЗДАНИЕ ИЗМЕНЕНИЕ: ТЕГОВ, АРТИБУТОВ, УЗЛОВ ---

    var div = document.createElement('div');                     //Создание элемента (тега)
    div.className = "mydiv";                                     //Добавление-атрибута (класса элементу)
    div.id = 'id_div';                                           //Добавление-атрибута (id элементу)
    div.innerHTML = "<strong>Ура!</strong> Мой div.";            //Добавление html тегов в элемент
    document.body.insertBefore(div, document.body.firstChild);   //Добавление-элемента (div) на страницу в (body)
    var div2 = div.cloneNode(true);                              //Копирование элемента 
    div2.querySelector('strong').innerHTML = 'Супер!';           //Изменение-элемента по селектору
    div.parentNode.insertBefore(div2, div.nextSibling);          //Добавление-элемента (div2) на страницу после (div)
    var text = document.createTextNode(' createTextNode');       //Создание текстового узла (текста)
    div2.textContent;                                            //Изменение содержимого элемента в чистый текст
    div2.appendChild(text);                                      //Добавление-элемента в элемент
    div2.append(' append', text);                                //Добавление-элемента с содержимым в элемент
    div2.insertAdjacentHTML("beforeEnd", " insertAdjacentHTML+<code>beforeBegin/afterBegin/beforeEnd/afterEnd</code>"); //Добавление-4 (универсальное) что угодно и куда угодно
    var fragment = document.createDocumentFragment();            //Создание фрагмента документа в котором можно пересобирать документ (для большой работы)
    elem.getAttribute('data-about')                              //Обращение к артирубу напрямую
    elem.dataset.about                                           //Обращение к свойствам напрямую. (IE10-)
    
    ---СТИЛИ---

    var classList = elem.classList;                              //Получить все классы элемента
     classList.remove('page');                                   //удалить класс
    classList.add('post');                                       //добавить класс
     classList.contains('post')                                  //проверить наличие класса
    elem.setAttribute('order-state', 'canceled');                //добавление атрибута//Изменение класса
     var styleMyDiv = getComputedStyle(div);                     //Получить все доступные стили элемента
    styleMyDiv.marginTop;                                        //Получить-стиль(показать) элемента, уже применённый к элементу
    div2.style.width="100px";                                    //Добавление-Изменение-стиля элементу (ширину)
                                                                 /*Добавление-Изменение-стиля/стилей элементу, старый заменяется если был.*/
    div.style.cssText=" \
      -moz-border-radius: 8px; \
      border: 2px groove green; \
      color: red; \
      ";

    document.body.style.backgroundColor = '#222';                //Добавление-Изменение-стиля фона body (цвет)
    document.body.style.overflow = 'hidden'                      //Убрать прокручивание страницы
    document.body.style.overflow = ''                            //Вернуть прокручивание страницы

    ---ПРОКРУТКА---

    var scrollWidth = div.offsetWidth - div.clientWidth;         //Получить ширину прокрутки
    element.style.height = element.scrollHeight + 'px';          //Развернуть элемент на всю высоту

    div.offsetParent;    //Получить родительский элемент. (тольк чтен)
    div.offsetLeft;      //Получить отступ слева элемента от родителя с (padding+margin родителя). (тольк чтен)
    div.offsetTop;       //Получить отступ сверху элемента от родителя с (padding+margin родителя). (тольк чтен)
    div.offsetWidth;     //Получить ширину элемента с отступом(padding) этого элемента. (тольк чтен)
    div.offsetHeight;    //Получить высоту элемента с отступом(padding) этого элемента. (тольк чтен)
    div.clientLeft;      //Получить шиирну(отступ) левой рамки. Не включает в себя margin и padding. (тольк чтен)
    div.clientTop;       //Получить высоту(отступ) верхней рамки. Не включает в себя margin и padding. (тольк чтен)
    div.clientWidth;     //Получить ширину элемента вместе с полями padding, но без полосы прокрутки. (тольк чтен)
    div.clientHeight;    //Получить высоту элемента вместе с полями padding, но без полосы прокрутки. (тольк чтен)
    div.scrollWidth;     //Получить ширину элемента, включая прокручиваемую область. Включает в себя padding и не включает полосы прокрутки. (тольк чтен)
    div.scrollHeight;    //Получить высоту элемента, включая прокручиваемую область. Включает в себя padding и не включает полосы прокрутки. (тольк чтен)
    div.scrollLeft;      //Получить ширину прокрученной части документа, считается от верхнего левого угла. (Чтен и зап)
    div.scrollTop;       //Получить высоту прокрученной части документа, считается от верхнего левого угла. (Чтен и зап)

    ---ОБЛАСТЬ ВИДИМОСТИ---

    div.clientWidth;      //Получить ширину видимой части элемента
    div.clientHeight;     //Получить высриу видимой части элемента
    window.pageXOffse;t   //Получить ширину прокручиваемой области документа //-IE8
    window.pageYOffset;   //Получить высоту прокручиваемой области документа //-IE8

    div.scrollIntoView();    //Переместить экран к текущему элементу так чтобы он находился в верху видимой области экрана
    scrollIntoView(false);   //Переместить экран к текущему элементу так чтобы он находился в внизу видимой области экрана
    window.scrollTo(0,0);    //Перемещение в начало страницы
    window.scrollBy(0,10);   //Перемещение в низ на 10px
    
    //<button onclick="this.scrollIntoView()">this.scrollIntoView()</button>    //scrollIntoView() вариант с кнопкой.

    ---КООРДИНАТЫ---
    
    var coords = div.getBoundingClientRect();        //Получить координаты элемента в переменную coords. Один объватывающий. Возваращает объект(элемент).
    var coords2 = [coords.right, coords.bottom];     //Получить координаты нижнего правого угла элемента
    document.elementFromPoint(0, 0);                 //Получить элемент который находится в левом верхнем углу экрана
    div.style.position='fixed';                      //Фиксированная позиция элемента

    console.log(screen.width + ' x ' + screen.height);                               //Общая ширина х высота
    console.log(screen.availWidth + ' x ' + screen.availHeight);                     //Доступная ширина/высота (за вычетом таскбара и т.п.)
    console.log( "Браузер находится на " + window.screenX + "," + window.screenY );  //Координаты левого-верхнего угла браузера на экране

### Полезные функции и методы ###

//Применение методов к псевдо-массиву ------------------------------------------------------------+
    //Сопосб 1. Применить метод массива через call/apply
        var elems = document.documentElement.childNodes;
        [].forEach.call(elems, function(elem) {
          alert( elem ); // HEAD, текст, BODY
        });
    //Способ 2. При помощи Array.prototype.slice сделать из коллекции массив.
        var elems = document.documentElement.childNodes;
        elems = Array.prototype.slice.call(elems); // теперь elems - массив
        elems.forEach(function(elem) {
          alert( elem.tagName ); // HEAD, текст, BODY
        });

//Добовление функции всем элементам --------------------------------------------------------------+
    Element.prototype.sayHi = function() {
          alert( "Привет от " + this );
    }
    document.body.sayHi(); // Привет от [object HTMLBodyElement]

//Добовление свойства всем элементам -------------------------------------------------------------+
    Object.defineProperty(Element.prototype, 'lowerTag', {
          get: function() {
            return this.tagName.toLowerCase();
          }
    });
    alert( document.body.lowerTag ); // body


 //Кросс браузерная функция, для определения getComputedStyle или currentStyle(IE) ---------------+
    function getStyle(div) {
          return window.getComputedStyle ? getComputedStyle(div, "") : div.currentStyle;
    }

//Проверка видимости элемента --------------------------------------------------------------------+
    function isHidden(elem) {
          return !elem.offsetWidth && !elem.offsetHeight;
    }

//Получить высоту страницы с учётом прокрутки.----------------------------------------------------+
    var scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
    );

//Получить прокрутку окна. КроссБраузерная версия ------------------------------------------------+
    var html = document.documentElement;
    var body = document.body;
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
    alert( "Текущая прокрутка: " + scrollTop );

//Получить координаты относительно документа [Кросс-браузерный] ----------------------------------+
    function getCoords(elem) {
        // (1)
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        // (2)
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        // (3)
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        // (4)
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return {
            top: top,
            left: left
          };
    }

//Перебор элементов по классу
    var item = document.querySelectorAll("div.item");
    //Переводим в массив
    var arr = Array.prototype.slice.call(item);

    arr.forEach(function(index, array, currentValue) {
        //в данном примере array,currentValue тут не используются
        var patch = index.style;
        patch.width = '50px';
        patch.height = '50px';
        patch.backgroundColor = '#444';
    })
-------
//Кдик по элементу выбранному по селектору
    document.querySelector("a.close-reveal-modal").click();

//Данный пример возвращает список всех div элементов в пределах document имеющих классы "note" или "alert":
    var matches = document.querySelectorAll("div.note, div.alert");

//разность двух чисел
    function get(a, b){
      return Math.abs(a - b);
    }

    console.info(get(10, 20));   // 10
    console.info(get(-5, 3));    // 8
    console.info(get(-13, -15)); // 2


+-------------------------------------------------------------------------------------------------+
| СТРОКИ                                                                                          |
+-------------------------------------------------------------------------------------------------+
let str = 'string';
var a,b = 2;

function fun(a,b) { return 0;}
let array = [10, 20, 30];
let object = { props: 'name' };
let primitiv = 100;
let sym = Symbol("name"); //создание символа
let name = Symbol.for("name"); //создание симола в реестре

console.log(String(primitiv)); //преоброзовать в строку
console.log(Number(primitiv)); //преоброзовать в число
console.log(Boolean(primitiv)); //преоброзовать в логическое значение
console.log(fun.name); //получить имя функции
console.log(Array.prototype.slice.call(/*value*/)); //получить массив аргументов

str.valueOf() //проверка типа значения
str.length //длина строки

str.indexOf("string"); //совпадение в любом месте, ретурн начало 
if (~str.indexOf("string")) {/*совпадение найдено*/} 
str.charAt(0); //позиция симовла
str.substring(0,1) //получить подстроку //s
str.slice(1, -1) //обрезать строку //trin
str.toLocaleLowerCase() //преоброзовать в верхний регистр
str.toLocaleUpperCase() //преоброзовать в нижний регистр
str.toString() //преоброзовать в строку
str.replace(/string/gi, 'mystring!'); //замена подстроки
str.charCodeAt(0) //получить код по символу //115
String.fromCharCode(1072) //получить симвл //'a'
sym.toString() //получить симвл
Symbol.for("name") == name //проверка символа реестора
Symbol.keyFor(name) //получить имя символа

typeof sym //проверка на символы

+-------------------------------------------------------------------------------------------------+
| работа с объектами                                                                              |
+-------------------------------------------------------------------------------------------------+

//объект 1
var obj = {
    a: 'primitive',
    b: [1,2,3],
    c: function () { return 'метод3'; },
    d: { d1: 'd_prop'}
}
console.log(obj); //{a: "primitive", b: Array(3), c: ƒ, d: {…}}
console.log(obj.a); //primitive
console.log(obj.b); //(3) [1, 2, 3]
console.log(obj.c()); //метод3
console.log(obj.d.d1); //d_prop

//объект 2
var new_obj = new Object();
new_obj.a = 'primitive';
new_obj.b = [1,2,3];
new_obj.c = function () { return 'метод3'; };
new_obj.d = { d1: 'd_prop'};

console.log(new_obj.a); //primitive
console.log(new_obj['a']); //primitive

//--- перебор свойств объекта
for (var key in object) {
      console.log(key + " => " + object[key] );
}

//--- this | bind | конструктор
var mydiv = document.getElementById('myid'); //объект
function c() {console.log(this);} //конструктор
var g = c.bind(mydiv); //новая функция на основе "c()" с this от "mydiv"
g();

//--- Получить массив из элементов
var arrElem = [];
var getDOM = (function() {
    return function(node, n) {
        [].forEach.call(node.children, (node, childNumber) => {
            getDOM(node, childNumber);
            arrElem.push(node);
        });
    };
})();
getDOM(elem);
console.log(arrElem);
//elem.getElementsByTagName("*"); //альтернатива, если без колбеков

+-------------------------------------------------------------------------------------------------+
|   EVENT | событие                                                                               |
+-------------------------------------------------------------------------------------------------+

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


//--- Передача параметров в addEventListener ------------------------------------------------------+
    
    // Вариант 1. Привязываем контекст и первые по порядку параметры
    function someFunk(a, b, event) {
          console.log(a, b, event);
    }
    element.addEventListener('click', someFunk.bind(null, 1, 2));

    // Вариант 2. Используем интерфейс EventListener
    function someFunk(event) {
          console.log(this.a, this.b, event);
    }
    element.addEventListener('click', {handleEvent: someFunk, a: 1, b: 2});

    // Вариант 3.
    element.addEventListener('click', function() {
         someFunk(...);
    }, false);