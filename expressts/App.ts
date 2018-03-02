import * as express from 'express';
import * as path from 'path';
import {UserDAO} from './UserDAO';

class App {
    public express;
    constructor(){
        this.express = express();
        this.setup();
    }
    setup(){
        const router = express.Router();

        this.express.use('/', router);
        this.express.use(express.static(path.join(__dirname, '../static')));

        this.express.get('/users' , function (req, res) {
            res.json({"prenom": "felix", "nom":"sportelli"});
        });

        this.express.get('/users_mongo' , function (req, res) {
            new UserDAO().getAll(function(err, utilisateurs){
                res.json(utilisateurs);
            });
        });

    }
}
export {App};