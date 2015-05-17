accountModule.factory('accountService', ['$http', '$q', '$location', function ($http, $q, $location) {

    var rootUrl = 'http://api.getstriveapp.com/v1/';

    var accountService = {
        /**
         *
         * @param {String} userName
         * @param {String} password
         * @returns {promise|*|qFactory.Deferred.promise|fd.g.promise}
         */
        login: function (userName, password) {
            var deferred = $q.defer();
            //delete $http.defaults.headers.common["X-Parse-Application-Id"];
            //delete  $http.defaults.headers.common["X-Parse-REST-API-Key"];
            $http({
                method: 'GET',
                url: rootUrl + 'login',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    username : userName,
                    password : password
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
        getSpecifiedUser: function (userID) {
            var deferred = $q.defer();
            //$http.defaults.headers.common["X-Parse-Application-Id"] = "KoQHnogEss1EulYLu7xS8zzQvM0T5lifc7pOqSLA";
            //$http.defaults.headers.common["X-Parse-REST-API-Key"] = "SCNHZIrtoCMdSfWwZDaPfWLpPqSATSz2ChbjmvTR";
            $http({
                method: 'GET',
                url: rootUrl + 'users/' + userID,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        getUsers: function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: rootUrl + 'users',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        confirmCode: function (activationCode, userId) {
            var deferred = $q.defer();
            var rootUrl = 'http://api.getstriveapp.com/v1/';
            delete  $http.defaults.headers.common["X-Parse-Application-Id"];
            delete  $http.defaults.headers.common["X-Parse-REST-API-Key"];

            $http({
                method: 'GET',
                url: rootUrl + 'user/' + userId,
                headers: {
                    'Content-Type': 'application/json'
                },
                params : {
                    activationCode :  activationCode
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        register: function (phonenumber, username, imgUrl) {
            var deferred = $q.defer();
            var rootUrl = 'http://api.getstriveapp.com/v1/';
            delete  $http.defaults.headers.common["X-Parse-Application-Id"];
            delete  $http.defaults.headers.common["X-Parse-REST-API-Key"];

            $http({
                method: 'POST',
                url: rootUrl + 'user',
                headers: {
                    'Content-Type': 'application/json'
                },
                params : {
                    phonenumber :  phonenumber,
                    username : username,
                    imgUrl : imgUrl
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        deleteUser: function (objectId) {
            var deferred = $q.defer();
            $http({
                method: 'DELETE',
                url: rootUrl + 'users/' + objectId,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Parse-Session-Token' : currentUser.sessionToken
                }
            }).
              success(function (data, status, headers, config) {
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  deferred.reject('error');
              });


            return deferred.promise;

        },
        getCurrentUser : function(){
            var deferred = $q.defer();
            var currentUser = storageService.load('currentUser');
            if(typeof currentUser == 'undefined'){
                $location.url('/user/login');
                return;
            }

            accountService.getSpecifiedUser(currentUser.objectId).then(function(response){
                storageService.save('currentUser', response);
                deferred.resolve(response);
            });
            return deferred.promise;
        },
        logoutCurrentUser : function(){
            currentUser = undefined;
            storageService.clear('currentUser');
            $location.url('/user/login');
        }
    };

    return accountService;
}]);
