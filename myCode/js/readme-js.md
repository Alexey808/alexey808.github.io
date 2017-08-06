# Особенности сравнения
Если хотя бы один из аргументов true, то возвращает true, иначе – false
И возвращает true, если оба аргумента истинны, а иначе – false

ИЛИ (||) запинается на правде, И (&&) запинается на лжи.

null > 0    // false, т.к. null преобразовано к 0
null >= 0   // true, т.к. null преобразовано к 0
null == 0   // false, в стандарте явно указано, что null равен лишь undefined

alert( 1 || 0 ); // 1
alert( true || 'неважно что' ); // true
alert( null || 1 ); // 1
alert( undefined || 0 ); // 0

alert( 0 && 1 ); // 0
alert( 1 && 2 && 3 ); // 3
alert( null || 1 || 2 ); // 1

# Добовляем и удаляем класс (btn_down)
**html:**
```html
<div class="btn btn_top">
  Добавить этой кнопке класс "btn_down"
</div>
```
**js:**
```js
document.querySelector('.btn').addEventListener('click', function() {
  document.querySelector('.btn_top').classList.toggle('btn_down');
}, false);
```
---
