angular.module('myApp', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        templateUrl: './directive/myDir.js',
        controller: 'mainCtrl',
        url: '/'
      })
  })

//Insert third-party dependencies into empty array brackets
//example: ng-grid, ui.router, etc...
