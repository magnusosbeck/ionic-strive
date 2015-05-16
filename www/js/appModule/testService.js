appModule.factory('testService', ['$http', '$q', function ($http, $q) {

    var rootUrl = 'http://api.getstriveapp.com/v1/';
    //http://api.getstriveapp.com/v1/routes?routeId=mYXvSFlca3&userId=L4tOQcuyXc&dates=2015-05-16,9000,3000;2015-05-15,9000,3000;2015-05-14,6000,2000;2015-05-13,4000,1300;2015-05-12,4000,1300;2015-05-11,4000,1300;2015-05-10,3000,1000;


    var testService = {
        test : function(){
            delete $http.defaults.headers.common["X-Parse-Application-Id"];
            delete $http.defaults.headers.common["X-Parse-REST-API-Key"];
            console.log($http.defaults.headers.common);

            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: rootUrl + "routes",
                params : {
                    routeId : 'mYXvSFlca3',
                    userId : 'L4tOQcuyXc',
                    dates : '2015-05-16,9000,3000;2015-05-15,9000,3000;2015-05-14,6000,2000;2015-05-13,4000,1300;2015-05-12,4000,1300;2015-05-11,4000,1300;2015-05-10,3000,1000;'
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

    return testService;

}]).run(['testService', function(testService){

    var isTestning = false;

    if(isTestning){
        console.log('running test');
        testService.test().then(function(result){
            console.log('test: ', result);
        });
    }

}]);
