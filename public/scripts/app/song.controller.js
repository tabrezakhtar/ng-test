controllerModule.controller('SongCtrl', ['$scope', 'httpService', function ($scope, httpService) {
	'use strict';
	$scope.message = 'Song Controller';	


	$scope.message = 'Home Controller';	

	httpService.get('/api/songs').then(function(songs){
		$scope.songs = songs;
	});
}]);