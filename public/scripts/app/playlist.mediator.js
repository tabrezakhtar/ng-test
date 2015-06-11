mediatorModule.service('playlistMediator', ['$rootScope', 'playlistService', 'songService', function ($rootScope, playlistService, songService) {
    'use strict';

    return {
        addSongToPlaylist: function (songId) {
            var song = songService.getSong(songId);
            playlistService.addSongToPlaylist(song);
            $rootScope.$broadcast('song-added-to-playlist');
        }
    };
}]);