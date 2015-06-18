mediatorModule.service('playlistMediator', ['$rootScope', 'playlistService', 'songService', function ($rootScope, playlistService, songService) {
    'use strict';

    return {
        addSongToPlaylist: function (songId) {
            var song = songService.getSong(songId);
            playlistService.addSongToPlaylist(song);
            $rootScope.$broadcast('playlist-changed');
        },

        removeSongFromPlaylist: function (songId) {
            playlistService.removeSongFromPlaylist(songId)
            songService.addToSongList(songId);
            $rootScope.$broadcast('playlist-changed');
        }
    };
}]);