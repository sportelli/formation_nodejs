const userDAO = require('../dao/userDAO');

exports.checkLogin = function(login, password, cb) {
//    const user=userDAO.get(login);
    userDAO.get(login, function (err, user) {
        if ((user != null) && (user.password === password)){
            cb(null, user);
        }
        else {
            cb(null);
        }
    });
}