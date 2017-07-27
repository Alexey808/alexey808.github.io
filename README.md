
## Основные команды для работы с git

### При первом запуске git
```
git config --global user.name "Alexey"
git config --global user.email "laiten808@gmail.com"
```
### При создании нового репозитория
```
git init
git remote add shared https://github.com/Alexey808/myProject.git
git remote add myurl https://github.com/Alexey808/alexey808.github.io

git branch laiten
```
### Использование
```
git add .
git commit -m "commit"
git checkout laiten

git fetch myurl master
git pull --rebase myurl master

git push shared laiten  #туда
git pull shared master  #сюда
```
### Дополнительные
```
git config --list
git status
git branch -a
git remote -v  //просмотреть адреса, привязанные к репозиторию
git remote show shared //где shared наименование адреса
```
### Аллиасы
```
git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
```
### Исключения
```
# - закоментировать строку
*.a - не обрабатывать файлы, имя которых заканчивается на .a
!test.a - отслеживать в любом случае этот файл, даже если он в исключениях
/test - игнорировать только файл test в корневом каталоге
test/ - игнорировать все файлы в каталоге test/
doc/**/*.txt - игнорировать все .txt файлы в каталоге doc/
.git/info/exclude - Этот файл не коммитуется и остается только в локальном репозитории.
.gitconfig:  excludesfile = ~/.gitexcludes - Исключение для компьютера
```
## Прочее
```
-----
git add bower.json
git commit -m "Add bower.json."
git tag "v0.0.1"
git push origin --tags
-----
git init

git track remote branch     -добавлени
git gdd All/Curren-File     -добавить всё/добавить
git quick commit(repo/curren-fule)  -быстрый коммит
git push current branch     -отправить на гитхаб
git remote add origin <адрес репозитория из п.1 на GitHub/Bitbucket>
git remote -v
---добавление репозитория к локалке
remote add [сокращение] [url]
git remote add shared https://github.com/Alexey808/test-repo.git

---обновление локалки из гитхаб
git fetch [имя удал. сервера] -для получения данных из удалённых проектов
git pull shared master    -добавляю из github ветки мастера к себе на локалку
git pull shared laiten    -добавляю из github ветки laiten к себе на локалку

---отправка из локалки в гитхаб
git push [удал. сервер] [ветка]
git push shared master    -отправка изменений на удалённый репозиторий в ветку мастер
git push shared laiten    -отправка изменений на удалённый репозиторий в ветку laiten
--------------------------------
git config --list   -конфиги

git init      -создать репозиторий в текущем каталоге

git add hello.html    -добавить файл в репозиторий
git add .     -добавить всё в текущем и подкаталогах

git commit -m "First Commit"  -добавить комент, где -m без редактора

git сheckout      -отменить комент
git checkout hello.html   -отмена локальных изменений и возращение на один шаг, до коммитов и "git add hello.html"
git reset HEAD hello.html -отмена проиндексированных изменений, до ввода коммита но после git "add hello.html"
git revert HEAD --no-edit -отмена комита без редактора
git reset --hard v1 или хеш -откат до версии v1 по тегу

git checkout [тег]    -переключение между версий по заданным тегам
git checkout -b style   -!создание ветки в репозитории

git clone hello cloned_hello  -Копирования репозитория hello с названием cloned_hello

git remote show origin    -показать подробную информацию об имени по умолчанию
git branch -a     -показать список локальных веток и удалённых

---
git fetch       -делается из клона. Вносим последние изменения из мастера в клон.
git merge origin/master   -слияние последних изменений из мастера в клонированном репозитории.
-
git pull      -эквивалентно двум командам "git fetch" и "git merge origin/master"
--- слияние веток
git checkout style
git merge master -m "Commit"  -слияние второстипенной ветки с мастером, делаем это из второстепенной ветки.

--- перебазирование веторк
git checkout style
git rebase master   -перебазирование веток, делаем из второстепеннной ветки и базируем с мастером.

git checkout master
git merge style

git rebase --abort
git rebase --continue
git rebase --skip
---
git clone --bare hello hello.git  -создание чистого репозитория из hello
git push shared master      -отправка изменений на удалённый репозиторий
git remote add shared ../hello.git  -Добавление удалённого репозитория
git branch --track shared master  -извлечение общих изменений (из под: cloned_hello)
---
!Коммиты, на которые нет ссылок, остаются в репозитории до тех пор, пока не будет запущен сборщик мусора.
!Рекомендации по исплоьзования слияния/перебазирования: использовать rebase для кратковременных, локальных веток, а слияние для веток в публичном репозитории.

шорткат - кротчайший путь
------------------------------------------------------------------------
quit
q


mkdir hello     -!создать каталог
cd hello      -!перейти в каталог
pwd       -!показать путь каталога где нахожусь
touch hello.html    -!создать файл
cat hello.html      -!просмотреть файл
git init      -!создать репозиторий от мастера
git add hello.html    -!ввести файл в репозиторий
git commit -m "First Commit"  -!добавить коммит
git add .     -!добавить всё в текущем и подкаталогах

---Получение старых версий из хеша
git hist      -!логи, где hist это аллиас (log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short)
git checkout <hash>   -выбираем хеш
cat hello.html      -!открытие файла
---

git checkout master   -!переход в мастер
git tag v1      -!поставить текущей версии тег v1
git checkout v1^    -выбрать родителя тега v1
git tag v1-beta
git checkout v1     -переключение по имени тега
git tag -d oops     -удаление тега oops
git tag       -просмотр всех тегов
git hist --all      -!посмотреть все логи
git hist master --all

git checkout hello.html   -отмена локальных изменений и возращение на один шаг, до коммитов и "git add hello.html"
git reset HEAD hello.html -отмена проиндексированных изменений, до ввода коммита но после git "add hello.html"
git revert HEAD --no-edit -изменение коммита без открытия редактора
git reset --hard v1   -сбросить все коммиты до версии v1
git commit --amend -m "Add an author/email comment" -изменение коммита

---Перемещение файла 1способ
git mv hello.html lib   -перемещение файла hello.html в каталог lib
git commit -m "Moved hello.html to lib"
---Перемещение файла 2 способ
mv hello.html lib
git add lib/hello.html
git rm hello.html
---

---Структура .git
ls -C .git      -показать все "материалы" git
ls -C .git/objects    -показать объекты, Имена каталогов являются первыми двумя буквами хэша sha1 объекта, хранящегося в git.
cat .git/config     -посмотреть конфигурационный файл репозитория
cat .git/HEAD     -посмотреть ссылку на текущую ветку
---

git hist --max-count=1    -поиск последнего коммита
git cat-file -t <hash>    -вывод коммита из указанного хеша
git cat-file -p <hash>    -инфа о хеше
git cat-file -p <treehash>  -поиск дерева
git cat-file -p <libhash> -вывод хеша каталога "lib"
git cat-file -p <hellohash> -вывести и посмотреть указанный хеш (7симв хеша)

git checkout -b style   -!создание ветки в репозитории
---!Слияние веток командой merge
git checkout style
git merge master --no-edit  -!команда на слияние ветки style с master
git checkout master
git merge style     -слияние master с styelt
---

git reset --hard <hash>   -отмотка по хешу до создания ветки style
---!Слияние веток командой rebase
git checkout style
git rebase master
-
Не используйте перебазирование:
  1) Если ветка является публичной и расшаренной. Переписывание общих веток будет мешать работе других членов команды.
  2) Когда важна точная история коммитов ветки (так как команда rebase переписывает историю коммитов).
Учитывая приведенные выше рекомендации, я предпочитаю использовать rebase для кратковременных, локальных веток, а слияние для веток в публичном репозитории.
---

git clone hello cloned_hello  -!Клонирование репозитория hello с названием cloned_hello
git remote show origin    -!показать происхождение репозитория
git branch      -показать доступные ветки в репозитории, вывод только локальных веток
git branch -a     -!вывод всех веток
git merge origin/master   -!слияние слияние текущей ветки master с веткой origin

git pull эквивалентна комбинации git fetch и git merge.

---добовление ветки style такой же как была в origin
git branch --track style origin/style
git branch -a
---

---!создание чистого репозитория
cd ..
git clone --bare hello hello.git
ls hello.git
---

---!Добавление удаленного репозитория
cd hello
git remote add shared ../hello.git
---

---!Отправка изменений (от repoz)
git push shared master
---

---!Извлечение общих изменений (от cloned_repoz)
git remote add shared ../hello.git
git branch --track shared master
git pull

---!Запуск git сервера
git daemon --verbose --export-all --base-path=.
Теперь в отдельном окне терминала перейдите в ваш рабочий каталог
git clone git://localhost/hello.git network_hello
```



#Работа и изображениями

**Фотошоп**
JPG 
-сжатие высокое
-качество 60
-галочка оптимизация
-галочка преобрзовать в sRGB

#Gulp
Установка nodejs необходимая для npm
  sudo apt-get install nodejs
Установка gulp глобально
  npm install -g gulp
Создание начального файла package.json
  npm init
Удалить локальный пакет с сохранинем изменений в package.json
  npm uninstall --save-dev mypackage
