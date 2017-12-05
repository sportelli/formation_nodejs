var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {

    // Récupération de l'url et des paramètres
    let myUrl = url.parse(req.url, true); 
    let query = myUrl.query;
    let data = {};
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    if (req.method == "GET"){
        // Lecture du fichier exemple.html
        fs.readFile('./exercices/resources/form_post.html', function(err, data) {
            console.log(err); // On affiche l'erreur dans la console Node
            // Envoi du contenu vers le navigateur
            res.write(data);
            res.end();
        });
    } else {
        req.on('data', function(chunk) {
            let vals = chunk.toString().split("&");
            for (val in vals) {
                let tabVal = vals[val].split("=");
                //console.log(tabVal);
                data[tabVal[0]] = tabVal[1];
            }
            console.log(data);
        });
        res.end();
    }
}).listen(8080);