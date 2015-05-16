routeModule.factory('routeService', ['$http', '$q', function ($http, $q) {

    var rootUrl = 'http://api.getstriveapp.com/v1/';

    var routeService = {
        updateRoute : function(routeId, userId, dates){

            var deferred = $q.defer();
            //routeId = 'mYXvSFlca3';
            delete $http.defaults.headers.common["X-Parse-Application-Id"];
            delete $http.defaults.headers.common["X-Parse-REST-API-Key"];

            routeId = 'mYXvSFlca3';

            $http({
                method: 'POST',
                url: rootUrl + "routes",
                params : {
                    routeId : routeId,
                    userId : userId,
                    dates : dates
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });

            return deferred.promise;
        }
    };

    return routeService;
}]);
