var express = require('express');

// Create the app
var app = express();

// Specify which folder the app is using
app.use(express.static('public'));

// Run the server
app.listen(3000, function () {
	console.log('Express server is up on port 3000');
});

