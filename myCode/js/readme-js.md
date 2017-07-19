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
