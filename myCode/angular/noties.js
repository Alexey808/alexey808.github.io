scope — область видимости, в которой вызывается директива
element — элемент DOM, которому принадлежит директива, обернутый в jQuery Lite
attrs — объект со списком всех атрибутов тэга, в котором вызывается директива


//--- $postLink -------------------------------------------
function myDirective() {
  restrict: 'E',
  scope: { foo: '=' },
  compile: function compile($element, $attrs) {
    return {
      pre: function preLink($scope, $element, $attrs) {
        //все элементы ещё НЕ связанны
      },
      post: function postLink($scope, $element, $attrs) {
        //все элементы связанны и готовы к работе
      }
    };
  }
}

//старый варинат
function myDirective() {
  restrict: 'E',
  scope: { foo: '=' },
  link: function postLink($scope, $element, $attrs) {
    //все элементы связанны и готовы к работе
  }
}
//новый вариант
var myComponent = {
  ...
  controller: function () {
    this.$postLink = function () {
      //все элементы связанны и готовы к работе
    };
  }
};

//--- $onChanges ------------------------------------------
!$onChanges вызывается в локальном контроллере компонентов 
из изменений, которые произошли в родительском контроллере. 
Изменения, которые происходят от родителя, которые вводятся 
в используемый компонент через bindings: {}.


var childComponent = {
  bindings: { user: '<' },
  controller: function () {
    this.$onChanges = function (changes) {
        // `changes` - это специальный экземпляр объекта-конструктора,
        // содержит хэш объекта изменения и
        // также содержит функцию, называемую `isFirstChange ()`
        // он реализован в исходном коде с использованием объекта-конструктора
        // и прототип метода для создания функции `isFirstChange ()`
    };
  }
};

angular
  .module('app')
  .component('childComponent', childComponent);