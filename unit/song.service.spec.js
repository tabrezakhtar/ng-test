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
          "isVisible": true
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

      it("should have a songslist method defined", function () {
        expect(songService.getSongList).toBeDefined();  
      });

      it("should return a list of songs", function () {
        songService.getSongList().then(function(response) {
          expect(response).not.toBe(null);
          expect(response.mockResponse).length.toEqual(2);
        });    

        $rootScope.$digest();
      });

    });

});