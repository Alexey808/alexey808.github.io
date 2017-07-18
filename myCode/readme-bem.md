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
