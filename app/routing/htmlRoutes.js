// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.

// DEPENDANCIES
var path = require('path');


// ROUTING   
module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });

    app.get("*", function(req, res) {        
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};