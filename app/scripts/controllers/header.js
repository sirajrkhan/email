'use strict';

angular.module("emailApp")
    .controller('HeaderCtrl', function($scope, $location){
    
    //Check which link is active and accordingly highlight the button
    $scope.isActive = function(viewLocation){
        return (viewLocation === $location.path());
    }    
});