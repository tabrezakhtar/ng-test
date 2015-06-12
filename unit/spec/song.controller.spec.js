'use strict';

describe('Controller: SongCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('musicApp.controllers');
    module('musicApp.services');
});

  var _playlistMediator, _songService, _songController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    
    _playlistMediator = $injector.get('playlistMediator');
    _songService = $injector.get('songService');

    _songController = $controller('SongCtrl', {
      $scope: scope
    });
  }));

  it('should have a model defined', function () {
    scope.$apply();
    expect(scope.model).toBeDefined();
  });
});