var { SQLCONNECT } = require('./sql_connect')
module.exports = {
    InsertMap: function (args){
        var connection = SQLCONNECT()
        //Connection success
        if (connection){
            connection.query(`INSERT INTO maps (ID, name, image_link) VALUES (${args.id},${args.name},${args.image_link})`,function(error,result){
                console.log(result)
                console.log(error)
                return {
                    code: 500
                }
            })
        } else {
            console.log('Could not establish a connection')
        }
    }
}