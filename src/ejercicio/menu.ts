import * as yargs from 'yargs';
import * as fs from 'fs';
import { OperacionesNotas } from './OpcionesNota';
import * as chalk from 'chalk';
import { Nota } from './Nota';

/**
 * Comando 'leer'
 */
yargs.command({
    command: 'leer',
    describe: 'leer una nota',
    builder: {
      user: {
        describe: 'Usuario de la nota',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Título de la nota',
        demandOption: true,
        type: 'string',
      }
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string') {
          //logica leer nueva nota
        const gestor = new OperacionesNotas();
        gestor.leer(argv.user, argv.title);
      }else {
        console.log(chalk.red("ERROR en leer nota"))
      }
    },
});

/**
 * Comando 'agregar'
 */
 yargs.command({
  command: 'agregar',
  describe: 'agregar una nota',
  builder: {
    user: {
      describe: 'Usuario de la nota',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Cuerpo de la nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
        //logica agregar nueva nota
      const gestor = new OperacionesNotas();
      const notaNueva = new Nota(argv.title, argv.body, argv.color);
      gestor.agregar(notaNueva, argv.user);
    }else {
      console.log(chalk.red("ERROR en agregar nota"))
    }
  },
});

/**
 * Comando 'eliminar'
 */
 yargs.command({
  command: 'eliminar',
  describe: 'eliminar una nota',
  builder: {
    user: {
      describe: 'Usuario de la nota',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
        //logica eliminar nueva nota
      const gestor = new OperacionesNotas();
      gestor.eliminar(argv.title,argv.user);
    }else {
      console.log(chalk.red("ERROR en eliminar nota"))
    }
  },
});

yargs.parse(); 
