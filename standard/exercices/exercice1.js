// Chargement du module HTTP
const http = require('http');

http.createServer(function (req, res) {

    // res = response = réponse envoyée au navigateur
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');

    // console = la console côté serveur
    console.log("requête reçue");

}).listen(8080);
