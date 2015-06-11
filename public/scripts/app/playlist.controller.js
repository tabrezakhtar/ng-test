controllerModule.controller('PlaylistCtrl', ['$scope', 'playlistService', function ($scope, playlistService) {
	'use strict';
	
	$scope.model = {
		playlist: null
	};

	playlistService.getPlaylist().then(function(playlist){
		$scope.model.playlist = playlist;
	});

}]);