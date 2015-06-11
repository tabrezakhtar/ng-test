controllerModule.controller('PlaylistCtrl', ['$scope', 'playlistMediator', 'playlistService', function ($scope, playlistMediator, playlistService) {
	'use strict';
	
	$scope.model = {
		playlist: null
	};

	$scope.removeFromPlaylist = function(songId) {
		//$scope.model.playlist = _.filter($scope.model.playlist, function (song) { return song.id !== songId; });
		playlistMediator.removeSongFromPlaylist(songId);
	};

	loadPlaylist();

	$scope.$on('playlist-changed', function(event, args) {
	    loadPlaylist();
	});

	function loadPlaylist() {
		playlistService.getPlaylist().then(function(playlist) {
        	$scope.model.playlist = playlist;
		});
	}

}]);