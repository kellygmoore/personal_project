myApp.factory('ShareData', ["$http", function($http){
    var data = undefined;

    //PRIVATE
    var getTriviaData = function(){
        $http.get('/data').then(function(response){
            data = response.data.trivia;
            console.log("Async data response: ", data);
        });
    };


    //PUBLIC
    var publicData = {
        retrieveData: function(){
            data = getTriviaData();
        },
        triviaData: function(){
            return data;
        }
    };

    return publicData;

}]);