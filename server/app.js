var express = require("express");
var app = express();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/inorder_game_db';

app.set("port", process.env.PORT || 5000);

//get data from database
app.get('/trivia', function(req, res){

    var triviaArray = [];

    pg.connect(connectionString, function(err, client, done){

        var query = client.query("SELECT id, category, difficulty, points, question, " +
        "ans1, ans2, ans3, ans4, ans5, sol1, sol2, sol3, sol4, sol5 FROM inordertable");

        query.on('row', function(row){
            triviaArray.push(row);
        });

        query.on('end', function(){
            client.end();
            return res.json(triviaArray);
        });

        if(err) console.log(err);

    });

});



app.get("/*", function(req,res,next){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;