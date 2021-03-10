// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

const app = express();

const session = require('express-session');
const MongoStore = require('connect-mongo').default;

app.use(session({
    secret: 'bookswitch',
    saveUninitialized: false, 
    resave: false, 
    cookie: {
      maxAge: 1000*60*60*24*7// is in milliseconds.  expiring in 7 day
    },
    store: new MongoStore({
      mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/bookSwitch",
      ttl: 60*60*24*7, // is in seconds. expiring in 7 day
    })
}));

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

const path=require("path");
app.use(express.static(path.join(__dirname,"public")));

app.use((req, res, next) => {
	// If no routes match, send them the React HTML.
	res.sendFile(__dirname + "/public/index.html");
});



// 👇 Start handling routes here
// Contrary to the views version, all routes are controled from the routes/index.js
const allRoutes = require('./routes/index');
app.use('/api', allRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
