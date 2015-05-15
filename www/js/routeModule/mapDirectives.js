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

            var cityCardHeight = scope.routeMap.DistanceFromPreviousPointMeters / 10;
            if(cityCardHeight < 200){
                cityCardHeight = 200;
            }


            scope.cityCardHeight = cityCardHeight;

            scope.getDetailedView = function(){
                $state.go('tab.chat-detail', {id:scope.routeMap.objectId});
            };



            console.log(scope.routeMap);

        },
        controller: ['$scope',function ($scope) {

        }]
    };
}]);