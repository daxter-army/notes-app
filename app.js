const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./app_backend.js');

//customize Yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
        
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

//create remove command
yargs.command({
    command: "remove",
    describe: "Remove a Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

//create list command
yargs.command({
    command: "list",
    describe: "List all the Notes",
    handler(){
        notes.listNotes();
    }
})

//create read command
yargs.command({
    command: "read",
    describe: "Read all the Notes",
    builder: {
        title: {
            describe: "Note Titile",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();                 //parsing through yargs
// console.log(yargs.argv);    //both are same