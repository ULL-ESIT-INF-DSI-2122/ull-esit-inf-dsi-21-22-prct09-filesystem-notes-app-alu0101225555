//trabajamos con api sincrona

import chalk from 'chalk';
import * as fs from 'fs';


export class Nota {

  constructor( protected usuario: string, protected titulo: string, protected cuerpo: string, protected color: string) {
    this.usuario = usuario;
    this.titulo = titulo;
    this.cuerpo = cuerpo;
    this.color = color;
  }

  getUsuario() {
    return this.usuario;
  }

  getTitulo() {
    return this.titulo;
  }

  getCuerpo() {
    return this.cuerpo;
  }

  getColor() {
    return this.color;
  }

  mostrarTitulo(): void {
    switch (this.color) {
      case "Rojo":
        console.log(chalk.red(this.titulo));
        break;
      case "Verde":
        console.log(chalk.green(this.titulo));
        break;
      case "Azul":
        console.log(chalk.blue(this.titulo));
        break;
      case "Amarillo":
        console.log(chalk.yellow(this.titulo));
        break;
      default:
        console.log(chalk.red("ERROR: Color no permitido"));
        break;
    }
  }

  mostrarCuerpo(): void {
    switch (this.color) {
      case "Rojo":
        console.log(chalk.red(this.cuerpo));
        break;
      case "Verde":
        console.log(chalk.green(this.cuerpo));
        break;
      case "Azul":
        console.log(chalk.blue(this.cuerpo));
        break;
      case "Amarillo":
        console.log(chalk.yellow(this.cuerpo));
        break;
      default:
        console.log(chalk.red("ERROR: Color no permitido"));
        break;
    }
  }
}