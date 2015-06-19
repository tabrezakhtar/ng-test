'use strict';
describe('Song Service', function() {
    var songService, httpService, def, $q, $rootScope,
      mockSongsList = 
      [{
        "id": 1,
          "title": "Smells Like Teen Spirit",
          "artist": "Nirvana",
          "genre": "Grunge",
          "duration": 5.01,
          "rating": 3,
          "isVisible": true
        },
        {
          "id": 2,
          "title": "Thunderstruck",
          "artist": "AC/DC",
          "genre": "Rock",
          "duration": 4.52,
          "rating": 4,
          "isVisible": false
        }
      ];

    beforeEach(module('musicApp.services'));

    beforeEach(inject(function($injector, _$rootScope_) {
      $q = $injector.get('$q');
      songService = $injector.get('songService');
      httpService = $injector.get('httpService');
      $rootScope = _$rootScope_;

      def = $q.defer();
      def.resolve(mockSongsList);
      spyOn(httpService, 'get').and.returnValue(def.promise);
    }));

    describe('when getting a list of songs', function() {

      it("should have a songsList method defined", function () {
        expect(songService.getSongList).toBeDefined();  
      });

      it("should return a list of songs", function () {
        songService.getSongList().then(function(response) {
          expect(response).not.toBe(null);
          expect(response.length).toEqual(2);
        });    

        $rootScope.$digest();
      });

    });

    describe('when getting an individual song', function() {

      it("should have a getSong method defined", function () {
        expect(songService.getSong).toBeDefined();  
      });

      it("should return a song", function () {

        songService.getSongList().then(function(songList) {
          var song = songService.getSong(2);
          expect(song.id).toBe(2);          
        });    

        $rootScope.$digest();
      });

    });

    describe('when adding a song back to the playlist', function() {

      it("should have a addToSongList method defined", function () {
        expect(songService.addToSongList).toBeDefined();  
      });

      it("should make the song visible in the playlist", function () {

        songService.getSongList().then(function(songList) {
          var addSong = songService.addToSongList(2);
          expect(songService.songs[1].isVisible).toBe(true);
        });    

        $rootScope.$digest();
      });

    });
});