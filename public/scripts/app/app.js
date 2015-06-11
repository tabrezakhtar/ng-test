var musicApp = angular
  .module('musicApp', ['ngRoute', 'musicApp.controllers'])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/songs', {
        templateUrl: '/views/songs.html',
        controller: 'SongCtrl'
      })
      .when('/playlist', {
        templateUrl: '/views/playlist.html',
        controller: 'PlaylistCtrl'
      })
      .otherwise({
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
      });
  }]);

var controllerModule = angular.module('musicApp.controllers', []);