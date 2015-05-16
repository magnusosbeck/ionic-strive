appModule.factory('testService', ['$http', '$q', function ($http, $q) {

    var rootUrl = 'https://api.parse.com/1/';
    $http.defaults.headers.common["X-Parse-Application-Id"] = "KoQHnogEss1EulYLu7xS8zzQvM0T5lifc7pOqSLA";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "SCNHZIrtoCMdSfWwZDaPfWLpPqSATSz2ChbjmvTR";

    var testService = {
        getUserHasRoutes: function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: rootUrl + 'classes/UserHasRoutes',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  if(status == '404'){
                      alert('Wrong Username or Password, plz try again!');
                  }
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        test : function(){
            var deferred = $q.defer();

            //var myUser = {User:userID};
            //var strUser = JSON.stringify(myUser);

            $http({
                method: 'POST',
                url: rootUrl + "functions/updateStrive",
                //data : '{"User":"' +  user + '"}',
                //data : strUser,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).
              success(function (data, status, headers, config) {
                  console.log('data result from REST:', data);
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
