// Link routes to their data sources
// They will hold arrays of friend information

var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
// API POST Requests
// Here we'll write some code to take in the submitted user forms and store
// their input each in their own separate arrays
    app.post("/api/friends", function(req, res) {
        // pushes user's answers to an array stored in the friends.js file
        
        var myFriend = {name: req.body.name, photo: req.body.photo, scores: []};
        for (var i = 1; i < 11; i++) {
            myFriend.scores.push(req.body["q" + i]);
        }

        var lowestScore = Number.MAX_SAFE_INTEGER;
        var bestMatch;
        for (var i = 0; i < friends.length; i++) {
            var comparison = compareFriends(myFriend, friends[i].scores);
            if (comparison < lowestScore) {
                bestMatch = friends[i];
                lowestScore = comparison;
            }
        };
        friends.push(myFriend);
        res.status(200).send(bestMatch);
        console.log(friends);
    });
    function compareFriends(arr1, arr2) {
        var totalDifference = 0;
        for (var i = 0; i < arr1.length; i++) {
            totalDifference += Math.abs(arr1[i] - arr2[i]); 
        }
        return totalDifference;
    }
};