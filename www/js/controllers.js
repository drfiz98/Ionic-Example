angular.module('starter.controllers', [])

app.controller('SigninCtrl', function($scope,$state){
  $scope.goToFbLogin = function(){
    $state.go('fb-login');
  }
  $scope.goToGLogin = function(){
    $state.go('g-login');
  }
});

app.controller('fbLoginCtrl', function($scope, $state, $cordovaOauth){
  $scope.login = function(){
    $state.go('tab.home');
  }
});

app.controller('HomeCtl', function($scope){});

app.controller('MapCtl', function($scope){});

app.controller('TabCtl', function($scope, $state){
  $scope.goToHome = function(){
    $state.go('tab.home');
  }
  $scope.goToMap = function(){
    $state.go('tab.map');
  }
});
