angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, routeService, healthKitService) {

      routeService.getUserHasRoutes().then(function (response) {
          $scope.UserHasRoutesResponse =  response.results;
      });
      healthKitService.getValue().then(function(response){
          $scope.healthKit = response;
      });

  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope, accountService) {
      $scope.settings = {
          enableFriends: true
      };


      $scope.loginInfo = {};
      $scope.loginByUsername = function () {
          accountService.login($scope.loginInfo.username, $scope.loginInfo.password).then(function (response) {
              $scope.loginResult = response;
          });
      };


  });
