controllerModule.controller('PlaylistCtrl', ['$scope', function ($scope) {
	'use strict';
	$scope.computers = [
		{
			'name': 'Commodore 64',
			'year': 1982
		},
		{
			'name': 'ZX Spectrum',
			'year': 1982
		},
		{
			'name': 'BBC Micro',
			'year': 1981
		},
		{
			'name': 'Apple II',
			'year': 1977
		},
		{
			'name': 'Atari 800',
			'year':78
		}
	];
}]);