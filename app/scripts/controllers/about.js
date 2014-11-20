'use strict';

/**
 * @ngdoc function
 * @name emailApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the emailApp
 */
angular.module('emailApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
