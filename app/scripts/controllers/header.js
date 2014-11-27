'use strict';

angular.module("emailApp")
    .controller('HeaderCtrl', function($scope, $location){
    
    $scope.isActive = function(viewLocation){
        console.log('view loc:'+viewLocation+ ' ----- loc path:'+$location.path());
        return (viewLocation === $location.path());
    }
    
});