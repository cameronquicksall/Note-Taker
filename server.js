// Required dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets port 
const app = express();
const PORT = process.env.PORT || 3001;

// Adds listener
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});

// Route for notes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db/db.json"));
});

app.get("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
})

// Route for index file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});