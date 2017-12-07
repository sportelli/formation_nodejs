// Chargement du module HTTP
const http = require('http');

// On charge notre module1
const module1 = require('./modules/module1');

http.createServer(function (req, res) {

    // res = response = réponse envoyée au navigateur
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // On appelle notre fonction disBonjour de notre module1
    res.write(module1.disBonjour());
    res.end();

    // console = la console côté serveur
    console.log("requête reçue");

}).listen(8080);
