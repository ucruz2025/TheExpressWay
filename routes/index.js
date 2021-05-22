const router = require('express').Router();
const path = require('path');
const saveData = require('../db/save');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/api/notes', (req, res) => {
    saveData.getNotes()
        .then((allNotes) => res.json(allNotes))
        .catch((err) => res.status(500).json(err));    
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/api/notes', (req, res) => {
    saveData.addNewNote(req.body)
        .then((newNote) => res.json(newNote))
        .catch((err) => res.status(500).json(err))
});

router.delete('/api/notes/:id', (req, res) => {
    saveData.completedNote(req.params.id)
        .then(() => res.json({ok: true}))
        .catch((err) => res.status(500).json(err))
});

module.exports = router;