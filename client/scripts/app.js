

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

myApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.inorderArray = [];

    $scope.getTrivia = function(){
        $http.get('/trivia').then(function(response){
            $scope.inorderArray = response.data;
        });
    };

    $scope.getTrivia();

    $scope.sortableOptions = {
        containment: '#sortable-container'
    };

    //$scope.catNameArray = [];
    //for(i=0; i<inorderArray.length; i++){
    //    $scope.catNameArray[i] = inorderArray[i].category;
    //}

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

//controller to display toggle on instructions on start page
myApp.controller('InstructionsCtrl', ["$scope", function($scope) {

    $scope.flip = true;

    $scope.showInstructions = function(){
        $scope.flip = !$scope.flip;
    };

}]);

//populates categories from db to the Category page
//myApp.controller('CatCtrl', ["$scope", "$http", function($scope, $http) {
//    $scope.categoryArray = [];
//    console.log($scope.categoryArray);
//
//    $scope.getCat = function () {
//        $http.get('/category').then(function (response) {
//            $scope.categoryArray = response.data;
//        });
//    };
//
//    $scope.getCat();
//}]);

