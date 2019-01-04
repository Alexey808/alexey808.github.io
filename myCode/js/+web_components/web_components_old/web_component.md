


web-components
//---
Жизненный цикл веб компонентов
	createdCallback - Элемент создан
	attachedCallback - Элемент добавлен в документ
	detachedCallback - Элемент удалён из документа
	attributeChangedCallback(name, prevValue, newValue) - Атрибут добавлен, изменён или удалён

//--- JS
my-component:undesoldev { color: red; } // применение стилей к элементу до registerElement
const timer = document.createElement("button", "my-timer"); //Расширение элемента используя extends
var shadowRoot = myItem.attachShadow({mode: 'open'}); // создать теневой DOM
var root = myElemId.createShadowRoot(); // создать теневой DOM
root.innerHTML = "<h3><content></content></h3> <p>Привет из подполья!</p>"; //точка вставки шадов-дом <content>
root.appendChild(templateId.content.cloneNode(true)); // использование шаблонов template

//--- СТИЛИ
:host { display:block } // обязательное, применимо к родителю, если он его не имеет 
:host div { // стиль к родительскому диву
:host(.myClass) p { // стиль к родительскому диву если он с классом myClass
:host-context(div) span { // стиль для span если он находится в div
::content span { // стиль для всех span
content[select="h1"]::content span { // // стиль для всех span, которые будут в шадов контент select="h1"

//---TEMPLATE
<link rel="import" href="component.html" >
link.import // доступ к dom компонента
document.currentScript.ownerDocument // доступ к внешнему DOM, из компонента