// DEPENDANCIES
var express = require('express');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTES
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// SERVER LISTENING
app.listen(PORT, function() {
    console.log('Listening on http://localhost:' + PORT);
});