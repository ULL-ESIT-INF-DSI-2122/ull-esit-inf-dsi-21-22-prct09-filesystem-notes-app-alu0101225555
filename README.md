### Práctica 9: Aplicación de procesamiento de notas de texto

Noelia Ibáñez Silvestre

alu0101225555

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101225555/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101225555?branch=master)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101225555/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101225555/actions/workflows/node.js.yml)

## Desarrollo

Para el desarrollo de esta práctica hemos creado 3 ficheros diferentes que se especificarán a continuación.

**menu.ts:**

Contiene los comandos que vamos a usar y gestionarlos son sus opciones y manejador correspondientes.

Un ejemplo es el siguiente, donde especificamos el comando 'agregar', que como su nombre indica, permite agregar una nota:

```
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
```

En el campo `command` indicamos el nommbre del comando que deseamos usar, `describe` contiene una breve descripción de dicho comando y `builder` contiene las diferentes opciones obligatorias que acompañan a dicho comando, en este caso, `user`, `title`, `body` y `color`. Además, se ha definido el manejador `handler` de dicho comando que recibe como parámetro un objeto `argv` que contiene los pares opción-valor del comando y una vez comprobamos que los datos son váilidos, llamamos al método correspondiente del archivo `OpcionesNotas.ts`.

Para usar el comando agregar, debemos ejecutar en la terminal:

```
node dist/ejercicio/menu.js agregar --user="usuario1" --title="Nota de prueba" --body="Nota que prueba el método agregar" --color="Rojo"
```

Para los demás comandos necesarios, los creamos de manera similar haciendo los cambios oportunos.

**Nota.ts:**

```
export class Nota {

  constructor( protected titulo: string, protected cuerpo: string, protected color: string) {
    //this.usuario = usuario;
    this.titulo = titulo;
    this.cuerpo = cuerpo;
    this.color = color;
  }

  /*
  getUsuario() {
    return this.usuario;
  }
  */

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
```

En este fichero encontramos la clase `Nota` en la que establecemos la estructura de cada nota (título, cuerpo de la nota y el color con el que se escribirá). Además, definimos un `switch` para el cuerpo y otro para el título,cuyas funciones son imprimir el cuerpo y el título, respectivamente, del color que recibe.

**OpcionesNota.ts:**

Contiene los diferentes métodos con los que se podrá interacturar, es decir, añadir, listar, editar, eliminar o leer una nota.

- **agregar()**: Método usado para añadir una nota. Recibe como parámetros una nota de tipo `Nota` y el nombre de un usuario de tipo `string`. Además definimos en 2 constantes, `ruta` y `ficheroruta` las rutas donde encontrar los JSON correspondientes a cada nota (guardados `./src/JSON/usarioX`) y en el segundo caso, el fichero en concreto.

Una vez tenemos esto, definimos la lógica, en la que comprobamos con `existsSync(ruta)` si la ruta del usuario existe, y en caso de devolver `true`, comprueba con el mismo comando (pero esta vez con la ruta y el archivo concreto) si ya existe una nota con dicho nombre, en caso de existir se avisará de un error y en caso contrario, se creará. Además, si la ruta de dicho usuario no existe, previamente se creará el directorio haciendo uso de `mkdirSync(ruta)`. 

```
agregar(nota: Nota, usuario: string) {
        const ruta: string = './src/ejercicio/JSON' + usuario;
        const ficheroruta: string = './src/ejercicio/JSON' + usuario + '/' + nota.getTitulo() + '.json'; 

        if (existsSync(ruta)) {
    
            if (existsSync(ficheroruta)) {
              console.log(chalk.red("ERROR: Título ya usado"));
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
```

- **leer():** Método usado para leer una nota determinada. Recibe como parámetro el nombre de un usuario y el título de la nota que se desea leer, ambos de tipo `string`. A continuación, lo que hacemos es comprobar con `existsSync` si existe dicho fichero en ese usuario y leerlo, haciendo uso de `readFile` y decidiendo el color que tiene asignado en dicha nota para sallir por pantalla (`switch`).

```
leer(usuario: string, titulo: string) {
        if (existsSync(`./src/ejercicio/JSON/${usuario}/${titulo}.json`)) {
            readFile(`./src/ejercicio/JSON/${usuario}/${titulo}.json`, (err, data) => {
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
```

- **eliminar():** Método usado para eliminar una determinada nota. Recibe como parámetros un título de una nota y un usuario. A continuación, definiremos en una constante `ficheroruta` la ruta del fichero pasado como parámetros.

Una vez tenemos dicha ruta, comprobamos con `existsSync` si existe ese fichero, en caso de existir hacemos uso de `rmSync` para elimimar el fichero, y en caso contrario, lanzará un mensaje de error.

```
eliminar(titulo: string, usuario: string) {
        const ficheroruta: string = './src/ejercicio/JSON' + usuario + '/' + titulo + '.json'; 

        if (existsSync(ficheroruta)) {
            rmSync(ficheroruta);
            console.log(chalk.green("Nota eliminada correctamente"));
          } else {
            console.log(chalk.red("ERROR: nota no encontrada"));
          }
    }
```

- **editar():** Método usado para editar una nota existente. Recibe como parámetros el usuaro al que pertenece la nota, título, cuerpo y color de la nota.

A continuación, comprobamos con `existsSync` si existe el fichero deseado. De ser así, escribimos los datos pasados en dicha nota, y en caso constrario, se imprimirá un error por pantalla.

```
editar(usuario: string, titulo: string, cuerpo: string, color: string) {
        const ficheroruta: string = './src/ejercicio/JSON' + usuario + '/' + titulo + '.json';
        
        if (existsSync(ficheroruta)) {
            writeFileSync(ficheroruta, `{\n\t"titulo": "${titulo}",\n\t"cuerpo": "${cuerpo}",\n\t"color": "${color}"\n}`);
            console.log(chalk.green("Nota modificada correctamente"));
          } else {
            console.log(chalk.red("Nota no encontrada"));
          }

    }
```

## Conclusiones

Proyecto interesante de desarrollar ya que manejamos nuevas herramientas que no hemos usado con anterioridad y con conceptos nuevos aunque esta práctica no ha llegado a cumplirse con éxito ya que lanza errores que no termino de entender, como por ejemplo, si trato de ejecutar haciendo `node/dist/ejercicio/menu.js` con la opción que quiero me deniega el perimiso, además haciendo uso de `chalk` para darle el formato deseado, funciona en algunas partes pero en otras dice `chalk.green(...) no es una función` pese a tener la versión actualizada.

## Tests

Salida de los tests de la clase `Nota`:

![claseNota](img/claseNota.png)

*Nota: los tests de la clase `OperacionesNotas` se encuentran definidos pero lanzan el siguiente error: `chalk.red is not a function`.*

## Enlaces:

[src](src)
[test](tests)
[documentación](docs)
