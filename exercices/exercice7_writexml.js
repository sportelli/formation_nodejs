// Pas de web ici, donc pas besoin d'include http
const fs = require('fs');
const xml2js = require('xml2js');

// Créons ici l'objet JSON que nous souhaitons ensuite transformer en XML
const familleJSON = {"utilisateurs":
[
    {
        "utilisateur": {"$": {"id": 1}, "nom": "SPORTELLI", "prenom": "Felix"}
    },
    {
        "utilisateur": {"nom": "SPORTELLI", "prenom": "Aurelie"}
    }
]

};

const builder = new xml2js.Builder();
const xml = builder.buildObject(familleJSON);

fs.writeFile('exercices/tmp/output.xml', xml, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("successfully written our update xml to file");
});
