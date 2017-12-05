var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Affichage de l'url appelée + méthode HTTP
    res.write("url: " + req.url + " - methode: " + req.method + "<br />");
    
    // Affichage des paramètres d'url
    let myUrl = url.parse(req.url, true); 
    //console.log(myUrl);
    res.write("path: " + myUrl.pathname + "<br />");
    res.write("arguments:" + "<br/>");
    for (key in myUrl.query) {
        res.write("- " + key + "(" + myUrl.query[key] + ")<br />");
    }
    let variables = myUrl.query;
    console.log(variables);
    res.end();

}).listen(8080);