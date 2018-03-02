interface Personne {
    showDescription():string;
}

class Utilisateur implements Personne {
    description:string;
    constructor(public prenom: string, public nom : string){
        this.description = prenom + " " + nom;
    }
    showDescription():string{
        return this.description;
    }
}

class Parent implements Personne {
    showDescription():string{
        return "toto";
    }    
}

function disBonjour(utilisateur : Utilisateur) : string{
    // return 3;
    return "bonjour " + utilisateur.nom + " " + utilisateur.prenom;
}

function disBonjour2(utilisateur: Personne): string {
    return utilisateur.showDescription();
}

const user = new Utilisateur("sportelli","felix");
//const user = new Utilisateur("sportelli", 4 );

console.log(disBonjour(user));
console.log(user.description);
console.log(disBonjour2(user));

console.log(disBonjour2(new Parent()));
