'use strict';
describe('Playlist mediator', function() {
    var songService, playlistService, def, $q, $rootScope, playlistMediator,
      mockSong = 
      {
          "id": 1,
          "title": "Smells Like Teen Spirit",
          "artist": "Nirvana",
          "genre": "Grunge",
          "duration": 5.01,
          "rating": 3,
          "isVisible": true
      };

    beforeEach(module('musicApp.services'));
    beforeEach(module('musicApp.mediators'));

    beforeEach(inject(function($injector, _$rootScope_) {
      songService = $injector.get('songService');
      playlistService = $injector.get('playlistService');
      playlistMediator = $injector.get('playlistMediator');
      $rootScope = _$rootScope_;

      spyOn(songService, 'getSong').and.returnValue(mockSong);
      spyOn(songService, 'addToSongList').and.returnValue(true);
      spyOn(playlistService, 'addSongToPlaylist').and.returnValue(true);
      spyOn(playlistService, 'removeSongFromPlaylist').and.returnValue(true);
    }));

    describe('when adding a song to a playlist', function() {

      it("should get a song and add it to playlist", function () {
        playlistMediator.addSongToPlaylist();
        $rootScope.$apply();
        expect(songService.getSong).toHaveBeenCalled();
        expect(playlistService.addSongToPlaylist).toHaveBeenCalled();
      });      

    });

    describe('when removing a song from a playlist', function() {

      it("should get a song and add it to playlist", function () {
        playlistMediator.removeSongFromPlaylist();
        $rootScope.$apply();        
        expect(playlistService.removeSongFromPlaylist).toHaveBeenCalled();
        expect(songService.addToSongList).toHaveBeenCalled();
      });      

    });

});