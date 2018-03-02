const mongoClient = require('mongodb').MongoClient;

class UserDAO {
    async getAll(cb){
        try {
            const db= await mongoClient.connect("mongodb://localhost:27017/formation");
            const collection = await db.collection("utilisateurs");
            const utilisateurs = await collection.find().toArray();
            cb(null,utilisateurs);
            
        } catch (err){
            cb(err);
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