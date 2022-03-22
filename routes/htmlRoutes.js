const path = require('path');

const router = require('express').Router();

//  route returns savedNotes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
// route returns index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname), '../public/index.html')
});

module.exports = router;