routeModule.factory('routeService', ['$http', '$q', function ($http, $q) {

    var rootUrl = 'https://api.parse.com/1/';
    $http.defaults.headers.common["X-Parse-Application-Id"] = "KoQHnogEss1EulYLu7xS8zzQvM0T5lifc7pOqSLA";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "SCNHZIrtoCMdSfWwZDaPfWLpPqSATSz2ChbjmvTR";

    var routeService = {
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
        /**
         *
         * @param {Object} user
         * @returns {promise|*|qFactory.Deferred.promise|fd.g.promise}
         */
        getRoutsBasedOnUserId : function(userID){
            var deferred = $q.defer();

            var myUser = {User:userID};
            var strUser = JSON.stringify(myUser);

            $http({
                method: 'POST',
                url: rootUrl + "functions/getRoutsByUser",
                //data : '{"User":"' +  user + '"}',
                data : strUser,
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
        //getSpecifiedUser: function (userID) {
        //    var deferred = $q.defer();
        //
        //    $http({
        //        method: 'GET',
        //        url: rootUrl + 'users/' + userID,
        //        headers: {
        //            'Content-Type': 'application/x-www-form-urlencoded'
        //        }
        //    }).
        //      success(function (data, status, headers, config) {
        //          deferred.resolve(data);
        //      }).
        //      error(function (data, status, headers, config) {
        //          deferred.reject('error');
        //      });
        //
        //
        //    return deferred.promise;
        //
        //},
        //getUsers: function () {
        //    var deferred = $q.defer();
        //
        //    $http({
        //        method: 'GET',
        //        url: rootUrl + 'users',
        //        headers: {
        //            'Content-Type': 'application/x-www-form-urlencoded'
        //        }
        //    }).
        //      success(function (data, status, headers, config) {
        //          deferred.resolve(data);
        //      }).
        //      error(function (data, status, headers, config) {
        //          deferred.reject('error');
        //      });
        //
        //
        //    return deferred.promise;
        //
        //},
        //register: function (userObject) {
        //    var deferred = $q.defer();
        //
        //    $http({
        //        method: 'POST',
        //        url: rootUrl + 'users',
        //        headers: {
        //            'Content-Type': 'application/json'
        //        },
        //        data: userObject
        //    }).
        //      success(function (data, status, headers, config) {
        //          deferred.resolve(data);
        //      }).
        //      error(function (data, status, headers, config) {
        //          deferred.reject('error');
        //      });
        //
        //
        //    return deferred.promise;
        //
        //},
        //deleteUser: function (objectId) {
        //    var deferred = $q.defer();
        //    $http({
        //        method: 'DELETE',
        //        url: rootUrl + 'users/' + objectId,
        //        headers: {
        //            'Content-Type': 'application/json',
        //            'X-Parse-Session-Token' : currentUser.sessionToken
        //        }
        //    }).
        //      success(function (data, status, headers, config) {
        //          deferred.resolve(data);
        //      }).
        //      error(function (data, status, headers, config) {
        //          deferred.reject('error');
        //      });
        //
        //
        //    return deferred.promise;
        //
        //},
        //getCurrentUser : function(){
        //    var deferred = $q.defer();
        //    var currentUser = storageService.load('currentUser');
        //    if(typeof currentUser == 'undefined'){
        //        $location.url('/user/login');
        //        return;
        //    }
        //
        //    accountService.getSpecifiedUser(currentUser.objectId).then(function(response){
        //        storageService.save('currentUser', response);
        //        deferred.resolve(response);
        //    });
        //    return deferred.promise;
        //},
        //logoutCurrentUser : function(){
        //    currentUser = undefined;
        //    storageService.clear('currentUser');
        //    $location.url('/user/login');
        //}
    };

    return routeService;
}]);