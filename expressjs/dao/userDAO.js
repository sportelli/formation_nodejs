const MongoClient = require('mongodb').MongoClient;

// Sans MongoDB
exports.get_old = function (login){
    const user = {"login" : login, "password" : "b", age: 52};
    return user;
}

// Avec MongoDB
exports.get = function (login , cb){
    // Appel de MongoDB pour chercher un utilisateur ayant "login"
    // db.utilisateurs.find({"login" : login })

    // MONGO_SERV="mongodb://127.0.0.1/formation"
    MongoClient.connect(process.env.MONGO_SERV, function(err, db) {
        db.collection('utilisateurs', function (err2, collection) {
            collection.find({"login": login}).toArray( function(err3, user){
                // objet user disponible 
                cb (null, user[0]);
            })
        });
    });
}

