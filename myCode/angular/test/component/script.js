(function() {
'use strict';

var cardComponentOptions = {
  bindings: { 
    title: '@'
  },
  transclude: true,
  template:
    '<div>' + 
      '<h3>{{$ctrl.title || "No title"}}</h3>' + 
      '<i><ng-transclude>Empty</ng-transclude></i>' +
    '</div>'
};

/**
 * Main Controller
 */
angular
  .module('app', [])
  .component('cardComponent', cardComponentOptions)
  .directive('card', simpleTransclusion)
  .directive('multislotCard', multipleTransclusion);

function simpleTransclusion(){
  return {
    restrict: 'E',
    transclude: true,
    scope: { 
      title: '@'
    },
    template:
      '<div>' + 
        '<h3>{{title || "No title"}}</h3>' + 
        '<i><ng-transclude>Empty</ng-transclude></i>' +
      '</div>'
  };
}

function multipleTransclusion(){
  return {
    restrict: 'E',
    transclude: {
      'title': '?cardTitle',
      'song': '?cardSong',
    },
    template:
      '<div>' + 
        '<h3 ng-transclude="title">No title</h3>' + 
        '<i ng-transclude="song">Empty</i>' +
      '</div>'
  };
}

})();