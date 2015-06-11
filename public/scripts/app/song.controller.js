controllerModule.controller('SongCtrl', ['$scope', 'playlistMediator', 'songService', function ($scope, playlistMediator, songService) {
	'use strict';
	$scope.model = {
		songs: null,
		searchText: ''
	};

	songService.getSongList().then(function(songs){
		$scope.model.songs = songs;
	});

	$scope.addToPlaylist = function(songId) {		
    	playlistMediator.addSongToPlaylist(songId);   
	};
}]);