import {Nota} from './Nota';
import * as fs from 'fs';
import {existsSync, readFile, writeFileSync, mkdirSync, rmSync} from 'fs';
import * as chalk from 'chalk';

/**
 * Clase que se encarga de implementar las diferentes operaciones que se pueden realizar con cada nota
 */

export class OperacionesNotas {
    constructor(){}

    leer(usuario: string, titulo: string) {
        if (existsSync('./src/ejercicio/JSON/${usuario}/${titulo}.json')) {
            readFile('./src/ejercicio/JSON/${usuario}/${titulo}.json', (err, data) => {
                if(err) {
                    console.log(chalk.red("EEROR de lectura"));
                }else {
                    const aux = JSON.parse(data.toString());
                    switch (aux.color) {
                        case "Rojo":
                            console.log(chalk.red(`\n${aux.titulo}\n${aux.cuerpo}\n`));
                            break;
                        case "Verde":
                            console.log(chalk.green(`\n${aux.titulo}\n${aux.cuerpo}\n`));
                            break;
                        case "Azul":
                            console.log(chalk.blue(`\n${aux.titulo}\n${aux.cuerpo}\n`));
                            break;
                        case "Amarillo":
                            console.log(chalk.yellow(`\n${aux.titulo}\n${aux.cuerpo}\n`));
                            break;
                    }
                }
            });
        }else {
            console.log(chalk.red("ERROR: Nota inexistente"));
        }
    }

    agregar(nota: Nota, usuario: string) {
        const ruta: string = './src/ejercicio/JSON' + usuario;
        const ficheroruta: string = './src/ejercicio/JSON' + usuario + '/' + nota.getTitulo() + '.json'; 

        if (existsSync(ruta)) {
    
            if (existsSync(ficheroruta)) {
              console.log(chalk.red("RROR: Título ya usado"));
            } else {
              writeFileSync(ficheroruta, `{\n\t"titulo": "${nota.getTitulo()}",\n\t"cuerpo": "${nota.getCuerpo()}",\n\t"color": "${nota.getColor()}"\n}`);
              console.log(chalk.green("Nota agregada correctamente"));
            }
          } else {
            console.log(chalk.green("Directorio personal creado"));
            mkdirSync(ruta);
            writeFileSync(ficheroruta, `{\n\t"titulo": "${nota.getTitulo()}",\n\t"cuerpo": "${nota.getCuerpo()}",\n\t"color": "${nota.getColor()}"\n}`);
            console.log(chalk.green("Nota agregada correctamente"));
          }
    }

    eliminar(titulo: string, usuario: string) {
        const ficheroruta: string = './src/ejercicio/JSON' + usuario + '/' + titulo + '.json'; 

        if (existsSync(ficheroruta)) {
            rmSync(ficheroruta);
            console.log(chalk.green("Nota eliminada correctamente"));
          } else {
            console.log(chalk.red("ERROR: nota no encontrada"));
          }
    }
}