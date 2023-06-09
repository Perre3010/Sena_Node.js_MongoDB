/*const http = require('http'); //pasar parametro http a un avariable
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'; //Definir hostname
const port = 3000; //Definir el puerto

const server = http.createServer((req, res) => {
  
  fs.readFile('index.html','UTF-8',(err,html)=>{
    res.statusCode = 200; //Status 200 = todo bien
    res.setHeader('Content-Type', 'html');
    res.end(html); //Mensaje
  });
  
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/



// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Leer el archivo HTML
  fs.readFile('index.html', (err, html) => {

    // Establecer las cabeceras de la respuesta HTTP
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Escribir el contenido del archivo HTML en la respuesta
    res.write(html);

    // Leer el archivo JavaScript con el objeto JSON
    fs.readFile('index.js', (err, js) => {

      // Agregar una etiqueta <script> al archivo HTML para cargar el archivo JavaScript
      res.write(`<script>${js}</script>`);

      // Finalizar la respuesta HTTP
      res.end();
    });
  });
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});