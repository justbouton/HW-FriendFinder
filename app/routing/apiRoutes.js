// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require('../data/friends.js');


module.exports = function (app) {

    // GET REQUEST
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    // POST REQUEST
    app.post("/api/friends", function (req, res) {
        // Declare var userData pulling data from req.body. userData passed in from survey.html
        var userData = (req.body);
        var userResponses = userData.score; // Get scores only.
        console.log('fi.score: ' + (userData.score))
        // Declare matchName, matchImage, totalDifference
        var matchName = '';
        var matchImage = '';
        var totalDifference = 100; // Make the initial value big for comparison

        console.log('userResponses length: ' + friends.length)


//             HELP!
//
///
//////
///////////
///////////////////
// FOR LOOP CRASHING ON SECOND PASS
///////////////////
///////////
//////
///
//

//                   ERROR
// TypeError: Cannot read property '0' of undefined
//     at /Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/app/routing/apiRoutes.js:48:51
//     at Layer.handle [as handle_request] (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/layer.js:95:5)
//     at next (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/route.js:137:13)
//     at Route.dispatch (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/route.js:112:3)
//     at Layer.handle [as handle_request] (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/layer.js:95:5)
//     at /Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/index.js:281:22
//     at Function.process_params (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/index.js:335:12)
//     at next (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/index.js:275:10)
//     at jsonParser (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/body-parser/lib/types/json.js:101:7)
//     at Layer.handle [as handle_request] (/Users/jbouton/Google Drive/1 - UC Berkeley/Git/Homework/HW-FriendFinder/node_modules/express/lib/router/layer.js:95:5)

        // Loop through each person of friends.js array subtracting userResponses
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            // Take the each of userResponses
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
console.log(JSON.stringify(friends[i].name) + ' diff: ' + diff);            
            }   // Compare diff between each user, keep lowest number
                if (diff < totalDifference) {

                    totalDifference = diff;
                    matchName = friends[i].name;
                    matchImage = friends[i].photo;
                    console.log('Name: ' + matchName + 'URL: ' + matchImage + ' tD' + totalDifference)
                }
        }
        // Add to friend.js array
        console.log('UserData for friends.js array: ' + JSON.stringify(userData))
        friends.push(userData);


console.log('Name: ' + matchName + 'Image: ' + matchImage);
        // Send appropriate response status, matchName and matchImage
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
        

        // Clear var
        // matchName = '';
        // matchImage = '';
        // userData = '';
        // userResponses = '';
    });
}
