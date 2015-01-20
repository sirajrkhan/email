'use strict';

/**
 * @ngdoc overview
 * @name emailApp
 * @description
 * # emailApp
 *
 * Main module of the application.
 */
angular
  .module('emailApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .when('/contact',{
        templateUrl: 'views/contact.html' ,
        controller: 'ContactCtrl'
    })
    .when('/product',{
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
    })
    .when('/news',{
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
    })
    .when('/inbox',{
        templateUrl:'views/inbox.html',
        controller:'InboxCtrl'
    })
    .when('/email',{
        templateUrl:'views/email.html',
        controller:'EmailCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.element(document).ready(function(){
       console.log('doc ready saaarr..')
   });
con
   