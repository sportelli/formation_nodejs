import {MongoClient} from 'mongodb';

class UserDAO {
    async create(user){
        try{
            const db= await MongoClient.connect("mongodb://localhost:27017/formation");
            const collection = await db.collection("utilisateurs");
            const userDB = await collection.save(user);
            return user;
        } catch(error){
            return null;
        }
    }


    async getAll(/* cb */){
        try {
            const db= await MongoClient.connect("mongodb://localhost:27017/formation");
            const collection = await db.collection("utilisateurs");
            const utilisateurs = await collection.find().toArray();
            return utilisateurs;
            
        } catch (err){
            return null;
        }
/*        mongoClient.connect("mongodb://localhost:27017/formation", function (err, db){
            if (err){
                console.log(err);
            } else {
                db.collection("utilisateurs" , function (err2, collection){
                    if (err2) {
                        console.log(err2);
                    } else {
                        collection.find().toArray(function (err3, utilisateurs){
                            cb(null, utilisateurs);
                        });
                    }
                });
            }
        });
*/
    }
}
export {UserDAO};