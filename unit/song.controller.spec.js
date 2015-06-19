'use strict';

describe('Song Controller', function() {

    var $scope, $controller, $q, def, songService, playlistMediator,
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
    
    beforeEach(module('musicApp.controllers'));
    beforeEach(module('musicApp.mediators'));
    beforeEach(module('musicApp.services'));

    beforeEach(inject(function(_$rootScope_, _$controller_, $injector){
        $scope = _$rootScope_.$new();
        $q = $injector.get('$q');
        $controller = _$controller_;
        songService = $injector.get('songService');             
        playlistMediator = $injector.get('playlistMediator');             
      
        def = $q.defer();
        def.resolve(mockSongsList);
        spyOn(songService, 'getSongList').and.returnValue(def.promise);
        spyOn(playlistMediator, 'addSongToPlaylist').and.returnValue(true);

        $controller('SongCtrl', {'$scope': $scope, 'songService': songService, 'playlistMediator': playlistMediator});
    }));

    describe('when the home controller is initalised', function() {
        it('should have a model defined', function() {
            expect($scope.model).toBeDefined();
        });

        it('should get a song list', function() {
            expect(songService.getSongList).toHaveBeenCalled();
        });

        it('should populate the songs model', function() {
            $scope.$apply();
            expect($scope.model.songs).not.toBeNull();
            expect($scope.model.songs.length).toEqual(2);
        });

    });

    describe('when adding to a play list', function() {
        it('should add a song', function() {
            $scope.addToPlaylist(1);
            expect(playlistMediator.addSongToPlaylist).toHaveBeenCalled();
        });
    });
});