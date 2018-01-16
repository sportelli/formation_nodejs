// Routes pour /articles/*

const express = require('express');
const router = express.Router();

router.get('/all', function(req,res){
    const articles=  ["patate", "frites", "steak"];
    res.json(articles);
});

router.get('/list', function(req, res){
    const title = "liste des articles";
    const articles = ["banane", "poire", "pomme"];
    const articles_objet = [
        {"id": 1, "nom": "pomme", "prix": 4.2},
        {"id": 2, "nom": "poire", "prix": 5},
        {"id": 3, "nom": "banane", "prix": 0}
    ]
    res.render('liste_articles',
            { "titre" : title, 
            "url" : "https://porn.com",
            "url2" : "https://pornx.com",
            "articles" : articles,
            "articles_objet": articles_objet
        });
});

module.exports = router;