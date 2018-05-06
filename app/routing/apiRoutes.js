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
        friends.push(req.body);
    });
};