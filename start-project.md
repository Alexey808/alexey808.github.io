# Софт
* node -> [https://nodejs.org/](https://nodejs.org/)
* git -> [https://git-scm.com/](https://git-scm.com/)

# При первом запуске git
В git-bush.
```
git config --global user.name "Alexey"
git config --global user.email "laiten808@gmail.com"
```
# Создание репозитория
В git-bush.
```
git init              // Инициализация
git remote add origin https://github.com/Alexey808/alexey808.github.io // подключение удалённого репозитория
git branch laiten     // Создание новой ветки по необходимости
```

# Создание окружения для сборки проекта
В git-bush. Инициализация (-fy ключи для быстрого создания)
```
npm init
```

# Работа с npm
В git-bush.
```
npm install --save-dev NAME_PACKAGE     // установка пакета
npm uninstall --save-dev NAME_PACKAGE   // удаление пакета
npm install                             // установка всех пакетов по списку package.json
```


