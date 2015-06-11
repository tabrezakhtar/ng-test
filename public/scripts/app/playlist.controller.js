controllerModule.controller('PlaylistCtrl', ['$scope', 'playlistService', function ($scope, playlistService) {
	'use strict';
	
	$scope.model = {
		playlist: null
	};

	loadPlaylist();

	$scope.$on('song-added-to-playlist', function(event, args) {
	    loadPlaylist();
	});

	function loadPlaylist() {
		playlistService.getPlaylist().then(function(playlist) {
        	$scope.model.playlist = playlist;
		});
	}

}]);