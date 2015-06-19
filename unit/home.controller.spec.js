'use strict';

describe('Home Controller', function () {
	var $controller, $scope;

  	// load the controller's module
  	beforeEach(module('musicApp.controllers'));

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function(_$rootScope_, _$controller_, $injector){
        $scope = _$rootScope_.$new();
        $controller = _$controller_;

        $controller('HomeCtrl', {'$scope': $scope});
    }));

    it('should have a message defined', function() {
        expect($scope.message).toEqual('Home Controller');
    });
});