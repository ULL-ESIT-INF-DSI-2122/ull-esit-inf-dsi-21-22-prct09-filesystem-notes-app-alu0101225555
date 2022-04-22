import * as yargs from 'yargs';
import * as fs from 'fs';


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.title === 'string') {
          //logica crear nueva nota
      }
    },
});

yargs.parse(); //OBLIGATORIO en el MENU o DONDE SE LEAN LOS COMANDOS