controllerModule.controller('SongCtrl', ['$scope', 'httpService', function ($scope, httpService) {
	'use strict';
	$scope.model = {
		songs: null,
		searchText: ''
	};

	httpService.get('/api/songs').then(function(songs){
		$scope.model.songs = songs;
	});
}]);