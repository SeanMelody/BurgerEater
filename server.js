// Const to require Express
const express = require("express");

// Set the port for heroku or to 5008, cause I'm crazy!
const PORT = process.env.PORT || 5000;

// Const for express
const app = express();

//NEED THIS TO BE ABLE TO USE THE JS AND CSS IN THE PUBLIC FOLDER!!!!
app.use(express.static("public"));

// Required to make sure the html can be read
app.use(express.urlencoded({ extended: true }));
// Json it!
app.use(express.json());

// Require handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

// Gotta use the routes
app.use(routes);

// Start the server and let user know where it's listening
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log(`Listening on: http://localhost:${PORT}`);
});
