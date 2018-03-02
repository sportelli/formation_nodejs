var Utilisateur = /** @class */ (function () {
    function Utilisateur(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
        this.description = prenom + " " + nom;
    }
    Utilisateur.prototype.showDescription = function () {
        return this.description;
    };
    return Utilisateur;
}());
function disBonjour(utilisateur) {
    // return 3;
    return "bonjour " + utilisateur.nom + " " + utilisateur.prenom;
}
function disBonjour2(utilisateur) {
    return utilisateur.showDescription();
}
var user = new Utilisateur("sportelli", "felix");
//const user = new Utilisateur("sportelli", 4 );
console.log(disBonjour(user));
console.log(user.description);
console.log(disBonjour2(user));
