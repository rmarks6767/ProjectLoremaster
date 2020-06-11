const MongoClient = require('mongodb').MongoClient;

module.exports = {
    Select: async () => {
        const USERNAME = process.env.USER
        const PASSWORD = process.env.MONGOPASSWORD
        const URI = `mongodb://${USERNAME}:${PASSWORD}@localhost:27017/adb`

        return new Promise( (success, failure) => {
            MongoClient.connect(URI, USERNAME, PASSWORD, (err, db) => {
                if (err || db==null) 
                    failure(err);
                else {
                    var dbo = db.db("loremaster");
                    return dbo.collection("accounts").find({}).toArray( function(err, res) {
                        if (err) failure(err); 
                        success (res);
                    });    
                }
            })
        })
    }
}