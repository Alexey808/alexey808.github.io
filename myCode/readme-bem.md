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
## Принципы работы с элементами

### Основы
+ Вложенность
  - Элементы можно вкладывать друг в друга.
  - Допустима любая вложенность элементов.
+ Принадлежность
  - Элемент — всегда часть блока и не должен использоваться отдельно от него.
+ Необязательность
  - Элемент — необязательный компонент блока. Не у всех блоков должны быть элементы.

### Файловая структура
+ Один блок — одна директория.
+ Имена блока и его директории совпадают. Например, блок header — директория header/, блок menu — директория menu/.
+ Реализация блока разделяется на отдельные файлы-технологии. Например, header.css, header.js.
+ Директория блока является корневой для поддиректорий соответствующих ему элементов и модификаторов.
+ Имена директорий элементов начинаются с двойного подчеркивания (__). Например, header/__logo/, menu/__item/.
+ Имена директорий модификаторов начинаются с одинарного подчеркивания (_). Например, header/_fixed/, menu/_theme_islands/.
+ Реализации элементов и модификаторов разделяются на отдельные файлы-технологии. Например, header__input.js, header_theme_islands.css.

**Допускается вложенность элементов в блоке. Это позволяет изменять DOM-структуру блока без внесения правок в коде каждого отдельного элемента.**
```html
<div class="block">
    <div class="block__elem1">
        <div class="block__elem2">
            <div class="block__elem3"></div>
        </div>
    </div>
</div>
```

#Примеры БЭМ
https://habrahabr.ru/post/203440/

--- Каркас ---
page
  page__head-line
  page__line
  page__line
  page__line
  page__footer

--- Меню ---
page__line
  menu
    link link_menu link_menu_active
    link link_menu
    link link_menu
    link link_menu

--- Форма поиска ---
page__line
  head
    head__logo
      logo
        logo__img
    head__search
      search
        search__input
          input input_search
        search__input
          button

--- Слайдер ---
page__line
  slider
    slider__current
      slide
        slide__text
          slide-text
            slide__header
            slide__subtext
        slide__image
            image image_slider
    slider__list
      slide-list
        slide-list__item
          slider-case-element
            slider-case-element__number slider-case-element__number_active
            slider-case-element__text slider-case-element__text_active
        slide-list__item
          slider-case-element
            slider-case-element__number
            slider-case-element__text
        slide-list__item
          slider-case-element
            slider-case-element__number
            slider-case-element__text  

--- Один из блоков контента ---
page__line 
  company
    company__header
      item-head
        item-head__img
        item-head__text
    company__content
      content
        content__img
        content__text
    content__link
      link



---------------------------------------------------------------------------------------------------

intro
  intro__logo
    logo
      logo__one
      logo__two
      logo__three
      logo__four
  intro__nav
    nav
      nav__rhomb
        rhomb
          rhomb__ico
          rhomb__title
          rhomb__pic
  intro__socials
    socials
      socials__rhomb
        rhomb
          rhomb__ico 
  intro__scroller
    scroller
      scroller__rhomb
        rhomb
          rhomb__ico
  intro__menubars
    menubars
      menubars__rhomb
        rhomb
          rhomb__ico

---

whatwedo
  whatwedo__title
  whatwedo__text
  whatwedo__rhomb
    rhomb
      rhomb__title
      rhomb__text

---

aboutus
  aboutus__title
  aboutus__line-head
  aboutus__line
  aboutus__line
  aboutus__btn
  aboutus__slider
    slider
      slider__list
        slider__list-item
        slider__list-item slider__list-item_active
        slider__list-item
      slider__btn
        slider__btn-back
        slider__btn-next
      slider__indic
        slider__indic-dot
        slider__indic-dot slider__indic-dot_active
        slider__indic-dot

---

services
  services__title
  services__line-head
  services__item
    item
      item__rhomb
        rhomb
          rhomb__ico
      item__title
      item__text

---

feature
    feature__title
    feature__pictures
      img-ipad
      img-iphone
    feature__item
      itemu
          item__rhomb
            rhomb
                rhomb__ico
          item__title
          item__text 
    feature__button

---

testimonials
  testimonials__title
  testimonials__slider
    slider
      slider__btn
        slider__btn-back
        slider__btn-next
      slider__list
        slider__list-item
          slider__list-item-img
          slider__list-item-rhomb
            rhomb
              rhomb__img
          slider__list-item-title
        slider__list-item
            ...
        slider__list-item
            ...
        slider__list-item
            ...


    
slider
  __btn
    slider-btn
      __back
      __next
  __dots
  __list