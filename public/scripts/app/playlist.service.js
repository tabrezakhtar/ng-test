serviceModule.service('playlistService', ['$q', 'httpService', function ($q, httpService) {

    var playlist = [];

    return {
        getPlaylist: function () {
            var deferred = $q.defer();

            httpService.get('/api/playlist').then(function(playlist) {
                this.playlist = playlist;
                deferred.resolve(playlist);
            });

            return deferred.promise;
        }
    };
}]);