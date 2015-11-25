myApp.factory('ShareData', ["$http", function($http){
    var data = undefined;

    //PRIVATE
    var getTriviaData = function(){
        var promise = $http.get('/data').then(function(response){
            data = response.data;
            //console.log("Async data response: ", data);
        });
        return promise;
    };

    //PUBLIC
    var publicData = {
        retrieveData: function(){
            return getTriviaData();
        },
        triviaData: function(){
            return data;
        }
    };

    return publicData;

}]);