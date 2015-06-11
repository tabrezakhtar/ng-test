controllerModule.controller('SongCtrl', ['$scope', 'songService', function ($scope, songService) {
	'use strict';
	$scope.model = {
		songs: null,
		searchText: ''
	};

	songService.getSongList().then(function(songs){
		$scope.model.songs = songs;
	});
}]);