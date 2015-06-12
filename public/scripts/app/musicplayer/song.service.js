serviceModule.service('songService', ['$q', 'httpService', function ($q, httpService) {
    'use strict';

    var songs = [];

    return {
        getSongList: function () {
            var deferred = $q.defer(),
                self = this;

            httpService.get('/api/songs').then(function(songs) {
                self.songs = songs;
                deferred.resolve(songs);
            });

            return deferred.promise;
        },
        
        getSong: function (songId) {
           var song = _.find(this.songs, function(song){ return song.id === songId; });
           song.isVisible = false;
           return song;
        },

        addToSongList: function (songId) {
           var song = _.find(this.songs, function(song){ return song.id === songId; });
           song.isVisible = true;
        }

    };
}]);