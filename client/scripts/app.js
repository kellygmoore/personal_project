

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

myApp.controller('MainCtrl', ["$scope", function($scope) {

    $scope.question1 = [{
        name: 'Honolulu',
        id: 1
    }, {
        name: 'Dayton',
        id: 4
    }, {
        name: 'Fargo',
        id: 3
    }, {
        name: 'Phoenix',
        id: 2
    }, {
        name: 'Washington D.C.',
        id: 5
    }];

    $scope.sortableOptions = {
        containment: '#sortable-container'
    };

    $scope.checkAnswers = function() {
        var counter = 0;
        for(i=0; i<$scope.question1.length; i++){
            if ($scope.question1[i].id === (i+1)) {
                console.log(i, " is correct!");
                counter++;
            }
        }
        console.log("The counter is at: ", counter);
    }

}]);