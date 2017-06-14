
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


