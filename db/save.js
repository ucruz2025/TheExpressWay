const fs = require('fs');
const util = require('util')
const {v4: uuidv4} = require('uuid');

const readFileDB = util.promisify(fs.readFile)
const writeFileDB = util.promisify(fs.writeFile);

class Save{
    read = () => readFileDB('./db/db.json', 'utf8');

    write = (note) => writeFileDB('./db/db.json', JSON.stringify(note));

    getNotes = () => this.read().then((notes) => {
            let allNotes = [];

            try{
                return allNotes.concat(JSON.parse(notes));
            }catch (err) {
                throw allNotes;
            }
        });
    
    addNewNote = (note) => {
        const newNote = {...note, id: uuidv4() };

        return this.getNotes()
            .then((allNotes) => [...allNotes, newNote])
            .then((newSet) => this.write(newSet))
            .then(() => newNote);
    }

    completedNote = (id) => 
        this.getNotes()
            .then((allNotes) => allNotes.filter((note) => note.id !== id))
            .then((updatedNotes) => this.write(updatedNotes));
}

module.exports = new Save();