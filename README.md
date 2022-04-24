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



## Conclusiones

Proyecto interesante de desarrollar ya que manejamos nuevas herramientas que no hemos usado con anterioridad y con conceptos nuevos aunque esta práctica no ha llegado a cumplirse con éxito ya que lanza errores que no termino de entender, como por ejemplo, si trato de ejecutar haciendo `node/dist/ejercicio/menu.js` con la opción que quiero me deniega el perimiso, además haciendo uso de `chalk` para darle el formato deseado, funciona en algunas partes pero en otras dice `chalk.green(...) no es una función`. 
