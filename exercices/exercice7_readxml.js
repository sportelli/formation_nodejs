// Pas de web ici, donc pas besoin d'include http
var fs = require('fs');
var xml2js = require('xml2js');

fs.readFile('exercices/resources/exemple.xml', 'utf-8', function (err, data){
    if(err) console.log(err);
    //console.log(data);
    xml2js.parseString(data, function(err, result){
        if(err) console.log(err);
        let utilisateur = result.utilisateurs.utilisateur;
        //console.log(utilisateur); 
        for (let i=0; i < utilisateur.length; i++){
            // Voyons à quoi ressemble notre objet
            console.log(JSON.stringify(utilisateur[i])); // id dans $

            // Récupérons chacune des valeurs
            console.log("nom=" + utilisateur[i].nom);
            console.log("prenom=" + utilisateur[i].prenom);
            let id = (utilisateur[i].$ != null) ? utilisateur[i].$.id : "inconnu"; // id peut être vide
            console.log("id=" + id );
        }

    });
});    