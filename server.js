// Required dependencies
const express = require("express");
const { join } = require("path");
const path = require("path");

// Set port
const app = express();
const PORT = process.env.PORT || 3001;

// Adds listener
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});

// Route for index file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Route for notes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes/html"));
});




