import * as express from 'express';
import * as path from 'path';
import {UserDAO} from './UserDAO';
import {json, raw, text, urlencoded} from 'body-parser';

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

        this.express.get('/users_mongo' , async function (req, res) {
            const utilisateurs = await new UserDAO().getAll();
            res.json(utilisateurs);
        });

// import {json, raw, text, urlencoded} from 'body-parser';
        this.express.use(json());
        this.express.use(raw());
        this.express.use(text());
        this.express.use(urlencoded({extended: true}));

        this.express.post("/add_user" , async function(req, res){
            const user = await new UserDAO().create(req.body);
            res.json(user);
        });

    }
}
export {App};