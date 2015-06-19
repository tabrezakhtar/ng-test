'use strict';

describe('Playlist Controller', function() {

    var $scope, $controller, $q, def, playlistService, playlistMediator, mockPlayList = [];
    
    beforeEach(module('musicApp.controllers'));
    beforeEach(module('musicApp.mediators'));
    beforeEach(module('musicApp.services'));

    beforeEach(inject(function(_$rootScope_, _$controller_, $injector){
        resetData();
        $scope = _$rootScope_.$new();
        $q = $injector.get('$q');
        $controller = _$controller_;
        playlistService = $injector.get('playlistService');             
        playlistMediator = $injector.get('playlistMediator');             
      
        def = $q.defer();
        def.resolve(mockPlayList);
        spyOn(playlistService, 'getPlaylist').and.returnValue(def.promise);
        spyOn(playlistMediator, 'removeSongFromPlaylist').and.returnValue(true);

        $controller('PlaylistCtrl', {'$scope': $scope, 'playlistService': playlistService, 'playlistMediator': playlistMediator});
    }));

    describe('when the home controller is initalised', function() {
        it('should have a model defined', function() {
            expect($scope.model).toBeDefined();
        });

        it('should get a playlist', function() {
            expect(playlistService.getPlaylist).toHaveBeenCalled();
        });

        it('should populate the playlists model', function() {
            $scope.$apply();
            expect($scope.model.playlist).not.toBeNull();
            expect($scope.model.playlist.length).toEqual(4);
        });

    });

    describe('when removing a song from a play list', function() {
        it('should remove a song', function() {
            $scope.removeFromPlaylist (1);
            expect(playlistMediator.removeSongFromPlaylist).toHaveBeenCalled();
        });
    });

    function resetData(){
      debugger;
      mockPlayList = 
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