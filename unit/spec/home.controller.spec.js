'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('musicApp.controllers'));

  var weatherController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
          
    weatherController = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have a message defined', function () {
    scope.$apply();
    expect(scope.message).toBe('Home Controller');
  });
});