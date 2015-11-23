

var myApp = angular.module("myApp", ['as.sortable', 'ngRoute']);

    myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/start', {
            templateUrl: "assets/views/routes/start.html"
        }).
        when('/login', {
            templateUrl: "assets/views/routes/login.html"
        }).
        when('/register', {
            templateUrl: "assets/views/routes/register.html"
        }).
        when('/category', {
            templateUrl: "assets/views/routes/category.html"
        }).
        when('/questionpage', {
            templateUrl: "assets/views/routes/questionpage.html"
        }).
        when('/completion', {
            templateUrl: "assets/views/routes/completion.html"
        }).
        otherwise({
            redirectTo: 'start'
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

    $scope.trueOrFalse = true;
    $scope.showNextArrow = true;
    $scope.pointsTotal = 200;

    $scope.checkAnswers = function() {
        $scope.counter = 0;
        $scope.pointsTotal -= 50;
        if($scope.pointsTotal === 0){
            //make it stop
        }


        console.log("Points total here after click:", $scope.pointsTotal);
        $scope.trueOrFalse = false;
        for(i=0; i<$scope.question1.length; i++){
            if ($scope.question1[i].id === (i+1)) {
                console.log(i, " is correct!");
                $scope.counter++;
            }
        }
        if($scope.counter === 5){
            $scope.showNextArrow = false;
            $scope.trueOrFalse = true;
        }
        console.log("The counter is at: ", $scope.counter);
    }

}]);

myApp.controller('InstructionsCtrl', ["$scope", function($scope) {

    $scope.flip = true;

    $scope.showInstructions = function(){
        $scope.flip = !$scope.flip;
    }

}]);

myApp.controller('CategoryCtrl', ["$scope", function($scope){


}]);

