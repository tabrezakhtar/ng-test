directiveModule.directive('musicPlayer', ['playlistService', function (playlistService) {

    return {
        templateUrl: '/views/templates/musicplayer.tmpl.html',
        restrict: 'A',
        // scope : {
        //     ownerobject : '=ownerobject',
        //     ownertypeid: '=ownertypeid',
        //     itemsperpage: '=itemsperpage',
        //     familytreetype: '=familytreetype'
        // },
        link: function (scope, iElement, attr) {
            scope.playerState = 'Play';
        }
    };
}]);