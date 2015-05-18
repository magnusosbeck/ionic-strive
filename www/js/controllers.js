angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, routeService, accountService, $ionicScrollDelegate, $location, $stateParams, $state, localStorageService, $timeout) {

      var self = this;

      //if($stateParams){
      //    console.log($stateParams);
      //}

      $scope.isLoading = false;

      self.oldStrive = localStorageService.load('myRoute');
      self.oldCurrentStretch = localStorageService.load('myCurrentLocation');
      if (self.oldStrive || self.lodCurrentStretch) {
          $scope.route = {
              "results": self.oldStrive
          };
          $scope.currentStretch = self.oldCurrentStretch;
      }

      self.init = function (fakeData) {

          $scope.isLoading = true;
          if (!localStorageService.load('me') || typeof !$scope.route == "undefined") {
              $state.go('tab.account');
          }


          if (localStorageService.load('me')) {
              var me = localStorageService.load('me');

              var dateString = '';
              if(fakeData){
                  dateString = fakeData;
              }

              routeService.updateRoute('banan', me['objectId'], dateString).then(function (response) {

                  $scope.currentStretch = self.findMyStretch(response, me['objectId']);
                  localStorageService.save('myCurrentLocation', $scope.currentStretch);

                  $scope.route = {
                      "results": response
                  };
                  localStorageService.save('myRoute', response);

                  $scope.findMe();
                  $scope.isLoading = false;
              });
          }
      };




      self.findMyStretch = function (striveMap, userId) {
          for (var i in striveMap) {
              if (striveMap[i].users != null) {
                  for (var j in striveMap[i].users) {
                      if (striveMap[i].users[j].objectId == userId) {
                          striveMap[i].isHere = true;
                          return striveMap[i];
                      }
                  }
              }
          }
      };


      $scope.findMe = function () {
          $location.hash('usersLocation');
          $ionicScrollDelegate.anchorScroll(true);
      };

      $scope.doRefresh = function () {
          self.init();
          $scope.$broadcast('scroll.refreshComplete');
          $scope.findMe();
      };

      $scope.addFakeSteps = function () {

          if(!localStorageService.load('fakeStrive')){
              localStorageService.save('fakeStrive', 0);
          }

          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth() + 1; //January is 0!
          var yyyy = today.getFullYear();

          if (dd < 10) {
              dd = '0' + dd
          }

          if (mm < 10) {
              mm = '0' + mm
          }
          var today = yyyy + '-' + mm + '-' + dd;

          var fakeStepCount = Math.floor((Math.random() * 3000) + 900) + localStorageService.load('fakeStrive');
          $scope.todaysSteps = localStorageService.save('fakeStrive', fakeStepCount);
          var fakeDistance = Math.floor(fakeStepCount / 3);

          var fakeString = today + ',' + fakeStepCount + ',' + fakeDistance + ';';

          self.init(fakeString);

      };

      self.init();

      $scope.getBack = function () {
          $state.go('tab.dash');
      };

      $scope.details = function () {
          $state.go('tab.dash-detail');
      };
  })

  .controller('cityDetailController', function ($scope, routeService, $stateParams, $state, DashCtrl) {

  })

  .controller('ChatsCtrl', function ($scope, routeService, healthKitService) {

  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams) {
      console.log($stateParams);
  })

  .controller('AccountCtrl', function ($scope, accountService, localStorageService, $state) {

      $scope.loginInfo = {};
      $scope.register = function () {

          accountService.register($scope.loginInfo.phonenumber, $scope.loginInfo.username, '').then(function (registerResponse) {
              if (registerResponse) {
                  $scope.accessCodeValidator = true;
                  localStorageService.save('me', registerResponse);
              }
          });
      };

      $scope.login = function(){
          var user =  localStorageService.load('me');
          accountService.confirmCode($scope.loginInfo.code, user['objectId']).then(function(response){

              if(response == 'OK'){
                  $state.go('tab.dash', {}, {reload: true});
              }else{
                  $scope.accessCodeValidator = false;
              }

          });
      };


      $scope.clearStorage = function () {
          localStorageService.delete('me');
          localStorageService.delete('myRoute');
          localStorageService.delete('myCurrentLocation');
          localStorageService.delete('fakeStrive');
      };


  });
