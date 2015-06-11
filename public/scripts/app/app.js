var musicApp = angular
  .module('musicApp', ['ngRoute', 'musicApp.controllers'])
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