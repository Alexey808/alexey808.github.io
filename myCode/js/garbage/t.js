# Прокрутка и работа с размерами экрана/страницы

screen.width //ширина экрана
screen.height //высота экрана


document.body.scrollHeight
document.documentElement.scrollHeight
document.body.offsetHeight //ширина клиеннской части окна браузера
document.documentElement.offsetHeight
document.body.clientHeight //высота клиеннской части окна браузера
document.documentElement.clientHeight


/* Интерестные способы применения js+css */
document.getElementById("block").style.width= width;
document.getElementById("block").style.height= height;

/* --- */
var div = document.createElement('div');
document.body
document.body.appendChild(div);
var scrollWidth = document.body.offsetWidth - document.body.clientWidth;
document.body.removeChild(div);
