

var myApp = angular.module("myApp", ['as.sortable', 'ngRoute']);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html"
        }).
        when('/sortbynumber', {
            templateUrl: "assets/views/routes/sortbynumber.html"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);

myApp.controller('MainCtrl', ["$scope", function ($scope) {

    $scope.word1 = [{
        name: 'Honolulu'
    }, {
        name: 'Dayton'
    }, {
        name: 'Fargo'
    }, {
        name: 'Phoenix'
    }, {
        name: 'Washington D.C.'
    }];


    $scope.numberlist1 = [{
        name: '67+24+18'
    } , {
        name: '1000/10'
    } , {
        name: '4x4x4'
    } , {
        name: '450-220-43'
    }];


    $scope.sortableOptions = {
        containment: '#sortable-container'
    };
}]);