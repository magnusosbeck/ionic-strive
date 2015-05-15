healthKitModule.factory('healthKitService', ['$http', '$q', function ($http, $q) {

    var healthKitService = {
        getValue: function () {
            var deferred = $q.defer();
            deferred.resolve('banan');
            return deferred.promise;
        }
    };

    return healthKitService;
}]);
