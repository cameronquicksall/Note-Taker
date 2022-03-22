const db = require('../db/db.json')
const router = require('express').Router();
const fs = require('fs');

// GET route for notes
router.get("/notes", function(req, res) {
    res.json(db)
});

// POST route for notes
router.post("/notes", (req, res) => {
    let newNote = req.body;
    // if first entry, give it an id starting at index of 0
    if (db.length === 0) {
        newNote.id = '0';
    } else {
    // else, increment id by 1 per entry
        newNote.id = JSON.stringify(JSON.parse(db[db.length - 1].id) +1 );
    }
    // push method to add the new note to the end of our array
    db.push(newNote);
    // store collected data from our object as a string and pass it into db.json using fs module
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(newNote);
    console.log(`New note ${newNote} has been saved!`);
});


module.exports = router;