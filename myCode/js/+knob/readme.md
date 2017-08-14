http://anthonyterrien.com/knob/

```js

$(function() {

    $(".dial").knob({
      
        /*Behaviors*/
        'min':-50, //минимальное значение
        'max':50, //максимальное значение
        'step':, //шаг заполнения
        'angleOffset':1, //поворот диаграммы в градусах
        'angleArc':160, //размер дуги в градусах
        'stopper':, //остановка при макс/мин при нажатии на колёсико мыши | false
        'readOnly':, //ввод и события | false
        'rotation':, //направление шкалы | clockwise

        /*UI*/
        'cursor':, //курсор, триггер | gauge
        'thickness':, //толщина от 0 до 1
        'lineCap':, //конец кольцевых указателей | butt
        'width':, //ширина
        'height':, //высота
        'displayInput':, //показать значение в cередине диаграммы | true
        'displayPrevious':, // показывать предудщее значение с прозрачностью | false
        'fgColor':, //цвет заполняющий шкалы
        'inputColor':, //цвет значения
        'font':, //стиль
        'fontWeight':, //жирность шрифта
        'bgColor':, //цвет фона пустой части диаграммы

    });

    /* Триггер */
    $('.dial').trigger(
      'configure',
      {
          "min":10,
          "max":40,
          "fgColor":"#FF0000",
          "skin":"tron",
          "cursor":true
      }
  );
});
```

