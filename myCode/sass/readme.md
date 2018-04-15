## Основная структура проекта
```
sass
  app - сюда компилируются исходники sass
  css - исходники
```

## Заметка
В данном проекте, в тасках используется ES6.
  Вместо:
```js
  function() {
    return ...
  }
```
  Это:
```js
  ()=> {
    ...
  }
```  

#Функции
https://sass-scss.ru/documentation/direktivi_kontrolya_i_virazheniya/direktiva_for.html

```sass
/*из этого*/
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

```css
/*компилирует это*/
.item-1 { width: 2em; }
.item-2 { width: 4em; }
.item-3 { width: 6em; }
```


---
### Миксин с условиями

@mixin container($x) {
    @if $x == 'btn' {
        @media screen and (max-width: 1005px) {
            justify-content: center;
            flex-wrap: wrap;
            /*всем дочерним классам содержащие в классе btn*/
            &>[class*=btn]{
                margin: 0;
            }
            /*первому дочернему элементу*/
            &>:first-child{
                margin: 32px;
            }
        }
    }
    @if $x == 'box' {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width: 1010px) {
            justify-content: space-around; /*IE*/
            justify-content: space-evenly; 
        }
    }
}
.myclass {
  @include container('btn');
}