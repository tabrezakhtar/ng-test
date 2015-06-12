serviceModule.service('playlistService', ['$q', 'httpService', function ($q, httpService) {
    'use strict';

    var playlist = [];

    return {
        getPlaylist: function () {
            var deferred = $q.defer(),
                self = this;

            if (self.playlist && self.playlist.length > 0) {
                deferred.resolve(self.playlist);
            } else {
                httpService.get('/api/playlist').then(function(playlist) {
                    self.playlist = playlist;
                    deferred.resolve(playlist);
                });
            }

            return deferred.promise;
        },

        addSongToPlaylist: function (song) {
            this.playlist.push(song);

            // httpService.post('/api/playlist').then(function(playlist) {
            //     this.playlist = playlist;
            //     deferred.resolve(playlist);
            // });
        },
        
        removeSongFromPlaylist: function (songId) {
            this.playlist = _.filter(this.playlist, function (song) { return song.id !== songId; });

            // httpService.delete('/api/playlist?id=songId').then(function(playlist) {
            //     this.playlist = playlist;
            //     deferred.resolve(playlist);
            // });
        }
    };
}]);