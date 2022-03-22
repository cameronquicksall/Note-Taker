const db = require('../db/db.json')
const router = require('express').Router();

// GET route for notes
router.get("/notes", function(req, res) {
    res.json(db)
});

// POST route for notes
router.post("/notes", (req, res) => {
    db.push(req.body);
    res.json(req.body);
    console.log(`Note ${db} has been saved!`);
});

//Delete method
// router.delete("/notes/:id", (req, res) => {

// });


module.exports = router;