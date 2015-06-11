var musicApp = angular
  .module('musicApp', [
    'ngRoute', 
    'ui.bootstrap',
    'musicApp.controllers', 
    'musicApp.services', 
    'musicApp.directives',
    'musicApp.mediators'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/playlist', {
        templateUrl: '/views/playlist.html',
        controller: 'PlaylistCtrl'
      })
      .when('/songs', {
        templateUrl: '/views/songs.html',
        controller: 'SongCtrl'
      })
      .otherwise({
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
      });
  }]);

var controllerModule = angular.module('musicApp.controllers', []);
var serviceModule = angular.module('musicApp.services', []);
var directiveModule = angular.module('musicApp.directives', []);
var mediatorModule = angular.module('musicApp.mediators', []);