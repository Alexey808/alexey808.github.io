
### Подключение внешнего скрипта. [async,defer]

```html
   <!-- После загрузки этого скрипта будет дальше загружатся остальная часть страницы -->
   <script src="myscript.js"></script>

   <!-- Cкрипт загружется сразу как только полностью себя догрузит, может раньше остальных  -->
   <script async src="myscript.js"></script>

   <!-- Cкрипт может загрузится раньше страницы, но сохранит последовательность с другими js -->
   <script defer src="myscript.js"></script>
```


### Математические
```js
   alert( 5 % 2 ); // остаток от деления 5 на 2 будет 1
```
### Сравнение разных типов
```js
   alert( '2' > 1 ); // true, сравнивается как 2 > 1
   alert( '01' == 1 ); // true, сравнивается как 1 == 1
   alert( false == 0 ); // true, false становится числом 0
   alert( true == 1 ); // true, так как true становится числом 1.
   alert( undefined == null ); // true
   alert( null > 0 ); // false
   alert( null == 0 ); // false
   alert( null >= 0 ); // true
```

