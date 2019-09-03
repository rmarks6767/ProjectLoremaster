const { SQLCONNECT } = require('./sql_connect')
const { generateUUID } = require('../extra_functions/generate_uuid')

module.exports = {
    InsertMap: function (args){
        var connection = SQLCONNECT()
        //Connection success
        if (connection){
            connection.query(`INSERT INTO maps (ID, name, image_link) VALUES ("${generateUUID()}","${args.name}","${args.image_link}")`,function(error,result){
                if(error){
                    return {
                        code: 409,
                        message: 'Bad Request'
                    }
                }
                console.log(result)
                return {
                    code: 200,
                    message: 'OK'
                }
            })
        } else {
            console.log('Could not establish a connection')
            return {
                code: 409,
                message: 'Bad Request'
            }
        }
    },
    InsertTiles: function(tiles){
        const connection = SQLCONNECT();
        tiles.foreach(function(tile){
            connection.query(`INSERT INTO tiles (ID, height, width, x, y, map_id, type) VALUES ("${generateUUID()}","${tile.height}","${tile.width}","${tile.x}","${tile.y}","${tile.map_id}","${tile.type}")`,function(error,result){
                if(error){
                    return {
                       code: error.code,
                       message: error.message
                    } 
                } else {
                    console.log(result)
                    return {
                        code: 200,
                        message:"OK"
                    }
                }      
            });
        });
    }
}