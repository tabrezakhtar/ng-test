'use strict';
describe('Playlist Service', function() {
    var playlistService, httpService, def, $q, $rootScope,
      mockSong = {
          "id": 1,
          "title": "Smells Like Teen Spirit",
          "artist": "Nirvana",
          "genre": "Grunge",
          "duration": 5.01,
          "rating": 3,
          "isVisible": true
        },
      mockPlaylist = [];

    beforeEach(module('musicApp.services'));

    beforeEach(inject(function($injector, _$rootScope_) {
      resetData();
      $q = $injector.get('$q');
      playlistService = $injector.get('playlistService');
      httpService = $injector.get('httpService');
      $rootScope = _$rootScope_;

      def = $q.defer();
      def.resolve(mockPlaylist);
      spyOn(httpService, 'get').and.returnValue(def.promise);
    }));

    describe('when adding a song to a playlist', function() {

      it("should have a addSongToPlaylist method defined", function () {
        expect(playlistService.addSongToPlaylist).toBeDefined();  
      });

      it("should add a song to the playlist", function () {
        debugger;
        playlistService.getPlaylist().then(function(response) {
          var originalPlaylistLength = response.length;
          playlistService.addSongToPlaylist(mockSong);
          expect(response).not.toBe(null);
          expect(response.length).toEqual(originalPlaylistLength + 1);
        });    

        $rootScope.$digest();
      });

    });

    describe('when removing a song from a playlist', function() {

      it("should have a removeSongFromPlaylist method defined", function () {
        expect(playlistService.removeSongFromPlaylist).toBeDefined();  
      });

      it("should remove a song from the playlist", function () {
        debugger;
        playlistService.getPlaylist().then(function(response) {
          var songFromPlaylist = _.find(playlistService.playlist, function (song) { return song.id === 6; });
          expect(songFromPlaylist).not.toBe(null);
          playlistService.removeSongFromPlaylist(6);
          songFromPlaylist = _.find(playlistService.playlist, function (song) { return song.id === 6; });
          expect(songFromPlaylist).toBe(undefined);
        });    

        $rootScope.$digest();
      });

    });

  afterEach(function() {
    resetData();
  });

  function resetData(){
    mockPlaylist = 
      [
        {
          "id": 6,
          "title": "Handsome",
          "artist": "The Vaccines",
          "genre": "Indie",
          "duration": 2.20,
          "rating": 2,
          "isVisible": true
        },
        {
          "id": 4,
          "title": "Livin' On A Prayer",
          "artist": "Bon Jovi",
          "genre": "Rock",
          "duration": 4.09,
          "rating": 3.5,
          "isVisible": true
        },
        {
          "id": 7,
          "title": "Stairway To Heaven",
          "artist": "Led Zeppelin",
          "genre": "Classic Rock",
          "duration": 7.58,
          "rating": 4.5,
          "isVisible": true
        },
        {
          "id": 5,
          "title": "Open Fire",
          "artist": "The Darkness",
          "genre": "Pop",
          "duration": 4.01,
          "rating": 2,
          "isVisible": true
        }
      ];
  }
});