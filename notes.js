const fs = require('fs');
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } catch(e) {
        console.error(e.error);
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    // console.log('Adding note: ', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    var notes = fetchNotes();
    console.log(notes);
}

var removeNode = (title) => {
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => note.title !== title);
    saveNotes(duplicateNotes);

    return notes.length !== duplicateNotes.length;
}

module.exports = {
    addNote,
    getAll,
    removeNode
}