#БЭМ методология CSS
    - Для позиционирования блока относительно других блоков, в большинстве случаев, используется микс.
    - В БЭМ не используют селекторы тегов и идентификаторов. Стили блоков и элементов описываются через селекторы классов.
    - Методология БЭМ не рекомендует совмещать теги и классы в селекторе.
    - Вложенность уместна, если нужно изменить стили элементов в зависимости от состояния блока 
    - Методология БЭМ не рекомендует использовать комбинированные селекторы. 
    - В CSS по БЭМ стили, отвечающие за внешнюю геометрию и позиционирование, задаются через родительский блок.
    - Для одинакого форматирования сразу нескольких элементов применяют групповые селекторы.
    - В CSS по БЭМ означает, что каждая CSS-реализация должна иметь одну ответственность.
    - Композиция вместо наследования
    - Работа с уровнями переопределения

#Файловые структуры
**БЭМ**
```
search-form/                           # Директория блока search-form

    __input/                           # Поддиректория элемента search-form__input
        search-form__input.css         
        search-form__input.js          

    __button/                          # Поддиректория элемента search-form__button
        search-form__button.css
        search-form__button.js

    _theme/                            # Поддиректория модификатора
        search-form_theme_islands.css  
        search-form_theme_lite.css

    search-form.css                    # Реализация блока search-form
    search-form.js
```

**Flex**
```
blocks/
    input/
        _type/                                 # Директория модификатора type
            input_type_search.css              # Реализация модификатора type
                                               # со значением search в технологии CSS
        __box/                                 # Директория элемента box
            input__box.css
        input.css
        input.js
    button/
        button.css
        button.js
        button.png                     # Блок menu
```

**Flat**
```
blocks/
    input_type_search.js
    input_type_search.bemhtml.js
    input__box.bemhtml.js
    input.css
    input.js
    input.bemhtml.js
    button.css
    button.js
    button.bemhtml.js
    button.png
```
