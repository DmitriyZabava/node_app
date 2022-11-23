const yargs = require("yargs");
const {addNotes, removeNotes, printNotes} = require("./note.controller");

yargs.command({
    command: "add",
    describe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "Note title",
            demandOption: true,

        }
    },
    handler({title}) {
        addNotes(title);
    }
});

yargs.command({
    command: "list",
    describe: "Print all notes",
    async handler() {
        await printNotes();
    }
});

yargs.command({
    command: "remove",
    describe: "Remove note by id",
    async handler({id}) {
        removeNotes(id);
    }
});


yargs.parse();



