var { SQLCONNECT } = require('./sql_connect')

module.exports = {
    AddTiles: function(tiles){
        const connection = SQLCONNECT();
        tiles.foreach(function(tile){
            connection.query(`INSERT INTO tiles (ID, height, width, x, y, map_id, type) VALUES ("${generateUUID()}","${args.height}","${args.width}","${args.x}","${args.y}","${args.map_id}","${args.type}")`,function(error,result){
                if(error){
                    return {
                       code: error.code,
                       message: error.message
                    } 
                }           
            });
        });
    }
}
