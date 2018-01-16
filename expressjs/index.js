const express = require('express');
const http = require('http');
const app = express();
const users = require('./routes/userRoutes');
const path = require('path');
const bodyParser = require("body-parser");
const articles = require('./routes/articlesRoutes');

// Gestion des fichiers statiques dans "public"
app.use(express.static(path.join(__dirname, 'public')));

// Chargement de PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Appel d'un template PUG
app.get("/hello", function(req,res){
    res.render("hello");
});

// Analyse du body http
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Gestion des appels HTTP GET sur /
app.get('/', function(req, res){
    res.json( { "message" : "ok"} );
});

// Gestion des appels HTTP GET sur /users
// Manière 1: "crade"
app.get('/users', function(req, res){
    const users = ["felix", "aurelie"]
    res.json( users );
});

// Manière 2 : "bof"
app.get('/users2' , users.listUsers);
app.post('/users', users.createUser);
app.post('/login', users.checkLogin);

// Manière 3 : "super"
app.use('/articles/', articles);

// Lancement du serveur HTTP sur port 8001
const server = http.createServer(app);
server.listen(8001);