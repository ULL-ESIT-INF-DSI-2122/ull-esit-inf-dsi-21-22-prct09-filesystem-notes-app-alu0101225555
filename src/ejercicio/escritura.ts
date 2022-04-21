//trabajamos con api sincrona

import * as fs from 'fs';


fs.writeFile('hola.txt', 'hola', (err) => {
    if (err) {
      console.log('Something went wrong when writing your file');
    } else {
      console.log('File helloworld.txt has just been created');
    }
  });