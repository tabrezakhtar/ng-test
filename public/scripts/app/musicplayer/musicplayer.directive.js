directiveModule.directive('musicPlayer', ['$interval', 'playlistService', function ($interval, playlistService) {

    return {
        templateUrl: '/views/musicplayer/templates/musicplayer.tmpl.html',
        restrict: 'A',
        link: function (scope, iElement, attr) {
            var songInterval, 
                currentSongIndex = 0,
                playlist = null;

            scope.model = {
                playerState: 'Play',
                songTime: 0,
                currentSong: null
            };            
            
            scope.loadPlaylist = function(){
                playlistService.getPlaylist().then(function(playlistFromServer) {
                    if (playlistFromServer.length > 0) {
                        playlist = playlistFromServer;
                        startPlaying(playlist);                        
                    }                 
                });
            };

            scope.next = function(){
                $interval.cancel(songInterval);
                goNextSong();
                startPlaying(playlist);
            };

            scope.prev = function(){
                $interval.cancel(songInterval);
                goPrevSong();
                startPlaying(playlist);
            };

            function startPlaying(playlist){
                scope.model.currentSong = playlist[currentSongIndex];
                scope.model.playerState = 'Pause';
                songInterval = $interval(
                    function() {
                        scope.model.songTime += 1;
                        if (scope.model.songTime >= scope.model.currentSong.duration*60){
                            goNextSong();
                        }
                    }, 1000
                );   
            }

            function goNextSong(){
                scope.model.songTime = 0;
                currentSongIndex += 1;
                if (currentSongIndex >= playlist.length){
                    currentSongIndex = 0;
                }
                scope.model.currentSong = playlist[currentSongIndex];
            }

            function goPrevSong(){
                scope.model.songTime = 0;
                currentSongIndex -= 1;
                if (currentSongIndex < 0){
                    currentSongIndex = playlist.length-1;
                }
                scope.model.currentSong = playlist[currentSongIndex];
            }
        }
    };
}]);