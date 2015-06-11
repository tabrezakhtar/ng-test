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
        
        getSong: function (id) {
           return _.find(this.songs, function(song){ return song.id === id; });            
        }

    };
}]);