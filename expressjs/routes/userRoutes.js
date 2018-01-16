const userService = require('../services/userServices');

exports.listUsers = function (req, res) {
    const users = ["felix", "aurelie"];
    res.json( users );
};

exports.createUser = function (req,res){
    console.log(req.body);
    res.write("<p>Utilisateur >" + req.body.email +"< cree</p>");
    res.end();
}

exports.checkLogin = function(req, res) {
    // Charger un fichier de configuration
    const config = require('../config.json');
    console.log(config);
    console.log(config.host);

    //const user = userService.checkLogin(req.body.login, req.body.password);
    userService.checkLogin(req.body.login, req.body.password , function( err, user) {
        if (user != null){
            res.json(user);
        } else {
            res.json({"error" : "wrong credentials"});
        }
    });
}

