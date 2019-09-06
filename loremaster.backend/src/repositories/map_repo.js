const { SQLCONNECT } = require('./sql_connect')
const { generateUUID } = require('../extra_functions/generate_uuid')

module.exports = {
    GetMapById: function(_, { id }){
        const connection = SQLCONNECT()
        
        

        if (connection){
            var map = {
                id: null,
                name: null,
                image_link: null,
                tiles: []
            }
            connection.query(`SELECT * FROM maps WHERE maps.ID="${id}"`, function(error, result){
                if (result){
                    console.log(result[0].ID)
                    
                } else if(error){
                    throw new Error(error);
                } else {
                    map = null;
                }
            });

            connection.query(`SELECT * FROM tiles WHERE tiles.map_id="${id}"`, function(error, result){
                if(result){
                    result.forEach(tile => {
                        return map.tiles.push(tile);
                    })
                    console.log(map)
                } else if(error){
                    throw new Error(error);
                } else {
                    map = null;
                }
            });
            return map;
        } else {
            return null;
        }

    },
    InsertMap: function(_, { map }){
        const connection = SQLCONNECT()
        const mapGUID = generateUUID()

        //Connection success
        if (connection){
            connection.query(`INSERT INTO maps (ID, name, image_link) VALUES ("${mapGUID}","${map.name}","${map.image_link}")`,function(error, result){
                if(error){
                    console.log("Got an errorrr: " + error)
                    return( {
                        code: error.code,
                        message: error.message
                    });
                }
                console.log("Inserted map")
            })
            map.tiles.map(tile => {
                const id = generateUUID(); 
                connection.query(`INSERT INTO tiles (ID, height, width, x, y, map_id, type) VALUES ("${id}","${tile.height}","${tile.width}","${tile.x}","${tile.y}","${mapGUID}","${tile.type}")`,function(error,result){
                    if(error){
                        console.log("Got an error: " + error)
                        return( {
                            code: error.code,
                            message: error.message
                        });
                    }
                    console.log("Inserting tile")     
                });
            });
            connection.end();
            return {
                code: 200,
                message: "OK"
            }
        } else {
            console.log('Could not establish a connection')
            return({
                code: 409,
                message: 'Bad Request'
            })
        }
    }
}