myApp.controller('MainCtrl', ["$scope", "ShareData", function($scope, ShareData) {

    $scope.trivia = [];

    $scope.shareData = ShareData;

    if($scope.shareData.triviaData() === undefined){
        $scope.shareData.retrieveData()
            .then(function() {
                $scope.trivia = $scope.shareData.triviaData();
            });
    } else {
        $scope.trivia = $scope.shareData.triviaData();
    }

    //console.log("Base Async: ", $scope.shareData.triviaData());

    //part of the ng-sortable
    $scope.sortableOptions = {
        containment: '#sortable-container'
    };

    //set variables
    $scope.trueOrFalse = true;
    $scope.showNextArrow = true;

    //play a session based on Category clicked on
    $scope.playCategory = function(catData){

        console.log(catData);
        $scope.categoryName = catData.category;
        $scope.pointsTotal = catData.points;

    };  //end of category session

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
    };

}]);