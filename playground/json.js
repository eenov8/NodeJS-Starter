var obj = {
    name: 'aj'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name" : "AJ", "age": 33}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

const fs = require('fs');
var originalNote = {
    title: 'some Title',
    body: 'some body'
};
originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
console.log(typeof noteString);
console.log(JSON.parse(noteString).title);

