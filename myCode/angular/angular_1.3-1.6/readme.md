## Директивы
ng-app/ng:app/ng_app - возможность указания директив  
data-ng-app - префикс data позволяет получить совместимость с html5.  

ng-app - для автозакрузки приложения, в корне приложения. Может принимать параметр с именем для связки его с контролером (<div ng-app="HelloWorldApp">) но лучше пользоваться роутером($route).  
ng-init - инициализация элемента, также зн по умл.  
ng-bind - аналог простых {{...}}.  
ng-controller- инициализация объктов контекста (правила именования контроллеров NameCtrl).  
ng-model="ИмяПеременной".  
ng-class="myClass" - добавить класс элементу.  
ng-src="" - для обработки путей вставленных через {{}}.
ng-view - для route ставится после инициализации контроллера <pre>(<ng-view></ng-view>)</pre> . 

## Службы
$scope - 
$http - 
$location - 
  $location.url() - полный url
  $location.path() - путь
  $location.search() - значение после ? знака
  $location.hash() - значение после # знака
$route - 
$routeProvider - 
$anchorScroll - прокручивание экрана в нужную часть
```html
  <div ng-app>                              //запуск приложения

    <div ng-init="name = 'value'">          //инициализация элемента, также зн по умл
      {{name}}                              //аналог ng-bind
      <div ng-bind="name"></div>            //аналог {{...}}
    </div> 

  </div>
```


### Регистрация контроллера (ng-app="myApp") | контроллеры 
```js
    const app = angular.module('myApp', []);

    app.controller('DemoCtrl', function($scope) {
        $scope.namee = 'hello world!';
    });
```
```html
<div ng-app="myApp">
  <div ng-controller="DemoCtrl"></div>
</div>
```

### Перебор и вывод элементов (ng-repeat) | массивы 

```js
      var phonecatApp = angular.module('phonecatApp', []);

      phonecatApp.controller('PhoneListCtrl', ($scope) => {
        $scope.phones = [
          {'name':'Nexus S',
          'snippet':'Fast just got faster with Nexus S.'},
          {'name':'Motorola X00M tith Wi-Fi',
          'snippet':'The Next, Next Generation tablet.'},
          {'name':'MOTOROLA X00M',
          'snippet':'The Next, Next Generation tablet.'}
        ];
      });
```
```html
    <div ng-app="phonecatApp">

      <div ng-controller="PhoneListCtrl">
        <ul>
          <li ng-repeat="phone in phones">
            <span>{{phone.name}}</span>
            <p>{{phone.snippet}}</p>
          </li>
        </ul>
      </div>

    </div>
```



### Фильтры | фильтры, дата, время, строки
```js
  //component
  let date = new Date();
  $scope.today = date;
```
```html
  <ul> //Стандартные фильтры
    <li>Дата: {{today | date:'dd/MM//yyyy'}}</li>             //= 23/04//2018
    <li>Доллар: {{100 | currency}}</li>                       //= Параметр
    <li>Разбить число на: {{123454545.6 | number:3}}</li>     //= 123,454,545.600
    <li>Нижний регистр: {{'строка' | lowercase}}</li>         //= строка
    <li>Верхний регистр: {{'строка' | uppercase}}</li>        //= СТРОКА
    <li>JSON: <pre>{{ {'text1':'text1', 'text2':'text2'} | json}}</pre></li>
  </ul>
  
  <ul> //Универсальные фильтры
    <li>Лимит: {{'СтрокаИлиМассив' | limitTo:12}}</li>
    <li>Универсальный фильтр: filter</li>
    <ul>
      <li>filter:name</li>
      <li>filter:!name (инверсия)</li>
    </ul>
    <li>Сортировка по свойству: orderBy</li>
      <ul>
        <li>orderBy:myPropertyWithName</li>
      </ul>
  </ul>
```
```html
//поиск по введённым символам
<li ng-repeat="phone in phones | filter:query"> 
//поиск по свойству, статусу
<li ng-repeat="phone in phones | filter:{name:query, status:true}"> 
//все элементы c аргументом query со статусом true
<li ng-repeat="phone in phones | filter:{$:query, status:true}"> 
//фильтр-функция
<li ng-repeat="phone in phones | filter:myFilter"> 
//длинна массива фильтрованная через функ (лучше результат сохратьи в переменную в контролер)
<div>{{ (item.phones | filter:myFIlter).length }}</div>
//Сохранение результата фильтра в переменную в директиве
<li ng-repeat="phone in valueFilter = (phones | filter:doneAndFilter)">
```

### Работа с сервером
Строка "//2" опасна при минификации. В ангуляре важно сохранить их наименование.
* data - данные 
* status - код состояния ответа
* headers - http заголовки ответа
* config - конфиг, объект с настройками прменяющийся для отправки запроса.

```js
const phonecatApp = angular.module('phonecatApp', []);


//phonecatApp.controller('PhoneListCtrl', ($scope, $http) => {   //2
// Способ 1, анонимная функция
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', ($scope, $http) => {

      $http.get('phones/phones.json').success((data, status, headers, config) => {
        $scope.phones = data;
      }).error(() => {
        console.log('Ошибка с запросом на сервер!');
      });
      /* ... */
  }]);


// Способ 2
function PhoneListCtrl($scope, $http) {...}
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);

// Способ 3, инжектом
function PhoneListCtrl($scope, $http) {...}
PhoneListCtrl.$inject = ['$scope', '$http'];
phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);
```

## Route
```html
<html lang="en" ng-app="phonecatApp">
...
<body ng-controller="PhoneListCtrl">
  <ng-view></ng-view>
  ...
  <div id="navbar" class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <li class="active"><a href="#/">Home</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/contact">Contact</a></li>
    </ul>
  </div>
  ...
  <a class="btn btn-default" href="#/phones/{{phone.id}}" role="button">View details &raquo;</a>
```
```js
import angular from "angular";
import ngRoute from "angular-route";

/* Controllers */
const phonecatApp = angular.module('phonecatApp', ['ngRoute']);

//Роутер
phonecatApp.config(['$routeProvider', ($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'template/home.html',
      controller: 'PhoneListCtrl'
    })
    .when('/about', {
      templateUrl: 'template/about.html',
      controller: 'aboutCtrl'
    })
    .when('/contact', {
      templateUrl: 'template/contact.html',
      controller: 'ContactCtrl'
    })
    .when('/phones/:phoneId', {
      templateUrl: 'template/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}])
/* контроллеры */

//Контроллер для home
phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope, $http) {

    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        $scope.phones = data;
    });
}]);

//Контроллер для about.html
phonecatApp.controller('aboutCtrl', ['$scope', '$http', '$location', ($scope, $http, $location) => { /*...*/ }]);

//Контроллер для contact.html
phonecatApp.controller('ContactCtrl', ['$scope', '$http', '$location', ($scope, $http, $location) => { /*...*/ }]);

//Контроллер для phone-detail.html
phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', 
                                          ($scope, $http, $location, $routeParams) => {
  //$routeParams позволяет получить :phoneId из роутера
  $scope.phoneId = $routeParams.phoneId;
}]);
```
### Factory (фабрика)
```js
import ngResource from "angular-resource";
...
const phonecatApp = angular.module('phonecatApp', ['ngRoute', 'ngResource']);
...
phonecatApp.factory('Phone', [
  //устанавливаем зависимость
  '$resource', ($resource) {
    //возвращаем $resource с шаблоном url, значение п.у. указывать не обязательно, {} ост пустыми
    return $resource('phones/:phoneId.:format', 

    {
      phoneId: 'phones', // '@phones' - если нужен динамический параметр
      format: 'json',
      apiKey: 'someKeyThis'
      /* phones/phones.json?apiKey=someKeyThis */
    }, 
    { //расширяем шаблон
      action: {
        method: <?>, 
        params: <?>, 
        isArray: <?>, 
        ...
      }
      updata: {
        method: 'PUT', 
        params: {
          phoneId: '@phone'
        }, 
        isArray: true
      }
    });
    //Phone.update(params, successcb, errorcb);
  }
]);
```


