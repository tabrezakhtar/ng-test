serviceModule.service('songService', ['$q', 'httpService', function ($q, httpService) {

    var songs = [];

    return {
        getSongList: function () {
            var deferred = $q.defer();

            httpService.get('/api/songs').then(function(songs) {
                this.songs = songs;
                deferred.resolve(songs);
            });

            return deferred.promise;
        },
        
        getSong: function (id) {
           return _.find(this.songs, function(song){ return song.id === id; });            
        }

    };
}]);