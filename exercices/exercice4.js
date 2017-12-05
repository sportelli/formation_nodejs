var http = require('http');
// Chargement du module FileSystem
var fs = require('fs');

http.createServer(function (req, res) {

    // Lecture du fichier exemple.html
    fs.readFile('./exercices/resources/exemple.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        console.log(err); // On affiche l'erreur dans la console Node
        // Envoi du contenu vers le navigateur
        res.write(data);
        res.end();
      });

}).listen(8080);