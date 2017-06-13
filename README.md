
## Основные команды для работы с git

###При первом запуске git
```
git config --global user.name "Alexey"
git config --global user.email "laiten808@gmail.com"
```
###При создании нового репозитория
```
git init
git remote add shared https://github.com/Alexey808/myProject.git
git remote add myurl https://github.com/Alexey808/alexey808.github.io

git branch laiten
```
###Использование
```
git checkout laiten
git add .
git commit -m "commit"

git push shared laiten  #туда
git pull shared master  #сюда
```
###Дополнительные
```
git config --list
git status
git branch -a
git remote -v  //просмотреть адреса, привязанные к репозиторию
git remote show shared //где shared наименование адреса
```

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for
1234
[my](<script src="https://gist.github.com/Alexey808/3e0c42f7211f4f85af8a3a45d89f5c6e.js"></script>)

1234

```JavaScript
// Парсинг
// Из URL "https://ya.ru/?tralala=true" получим "Object {tralala: "true"}"

function parseGetParams() { 
   var $_GET = {};
   var __GET = window.location.search.substring(1).split("&");
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
}
```

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Alexey808/alexey808.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

### Тест ###
 123
