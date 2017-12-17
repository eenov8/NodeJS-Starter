// console.log('Hey Node!');
const notes = require('./notes.js');
const yargs = require('yargs');
const argv = yargs.argv;
// console.log(argv.title, argv.body);

var command = argv._[0];

if(command === 'add') {
    var newNote = notes.addNote(argv.title, argv.body);
    if(newNote === undefined) {
        console.log('Duplicate');
    } else {
        console.log('New Note Created');
        console.log('================');
        console.log(`Title: ${newNote.title}`);
        console.log(`Body: ${newNote.body}`);
    }   
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'remove') {
    var nodeRemoved = notes.removeNode(argv.title);
    var message = nodeRemoved ? 'Note Removed' : 'Note Not Found';
    console.error(message);
}


