// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider
  .state('home', {
    url:'/',
    templateUrl:'templates/home.html'
  })

  .state('fb-login', {
    url: 'fb-login',
    templateUrl: 'templates/fb-login.html',
  })

  .state('g-login', {
    url: 'g-login',
    templateUrl: 'templates/g-login.html',
  })

  .state('tab', {
    url: 'tab',
    templateUrl: 'templates/tab.html',
    abstract: true
  })

  .state('tab.home', {
    url: '/home',
    view: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
      }
    }
  })

  .state('tab.map', {
    url: '/map',
    view: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
      }
    }
  })


});
