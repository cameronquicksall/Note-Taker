// Required dependencies
const express = require("express");
const path = require("path");

// Set port
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});

//Route for index file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});




