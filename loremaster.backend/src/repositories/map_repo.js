var {SQLCONNECT} = require('./sql_connect')
module.exports = {
    InsertMap: function (args){
        var connection = SQLCONNECT()
        //Connection success
        if (connection){
            connection.query(`INSERT INTO maps (ID, name, image_link) VALUES (${args.ID},${args.name},${args.image_link})`,function(error,result){
                
            })
        }
    }
}