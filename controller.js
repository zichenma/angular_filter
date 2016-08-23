/// <reference path="angular.js" />
var myApp = angular
    .module("myApp", [])
    .controller("TokenizeControler",
        function ($scope) {
            $scope.greeting = "Angular is awesome";
            $scope.delimiter = "#";
            $scope.defualt = true;
    });