var http = require('http');
var fs = require('fs');
var url = require('url');

// Ecriture d'un fichier de log pour toutes les visites
const tmpFile = 'exercices/tmp/visits.log';

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("envoye au navigateur");
    res.end("Bien recu");

    let myUrl = url.parse(req.url, true); 

    // appendFile ajoute en fin de fichiers, et créé le fichier s'il n'existe pas (le path doit exister)
    fs.appendFile(tmpFile, req.headers.host + 'visited: ' + myUrl.pathname +'\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

    // Pour remplacer le contenu : fs.writeFile

    // Pour supprimer le fichier (si ?delete=1 dans URL) : 
    let query = myUrl.query;
    
    if ( query.delete == 1 ){
        fs.unlink(tmpFile, function (err) {
            if (err) throw err;
            console.log('File deleted!');
      });
    }

}).listen(8080);