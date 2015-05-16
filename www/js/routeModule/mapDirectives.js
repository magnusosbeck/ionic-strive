routeModule.directive('routeMap',['$state', function ($state) {
    return {
        restrict: 'A',
        templateUrl: 'js/routeModule/mapDirectivesMap.html',
        scope : {
            routeMap : '='
        },
        replace: false,
        interpolate: true,
        link: function (scope, elm, attr) {

            scope.isHere = false;

            var cityCardHeight = scope.routeMap.DistanceFromPreviousPointMeters / 10;
            if(cityCardHeight < 200){
                cityCardHeight = 200;
            }

            if(scope.routeMap.users){
                scope.isHere = true;
            }

            scope.cityCardHeight = cityCardHeight;

            scope.getDetailedView = function(){
                $state.go('tab.chat-detail', {id:scope.routeMap.objectId});
            };

        },
        controller: ['$scope',function ($scope) {

        }]
    };
}]);