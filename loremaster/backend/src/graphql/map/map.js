const { Insert, Select } = require('../../sql/sqlFunctions');
const { GenerateId } = require('../../extraFunctions/generateId');  
const { Where } = require('../../extraFunctions/linqConstruction');

class Map {
    // ( source, args.{ map } )
    static async CreateMap(_, { map }){
        // Get the tiles from the object
        const tiles = map["tiles"];
        const mapId = GenerateId();
        delete map.tiles;
        map["id"] = mapId;
        
        return Insert("maps", Object.keys(map), Object.values(map))
        .catch((error) =>{ return error; })
        .then((result) => {
            tiles.forEach(async tile => {
                tile["id"] = GenerateId()
                tile["mapId"] = mapId
                Insert(
                    "tiles",
                    Object.keys(tile),
                    Object.values(tile)
                ).catch((error) =>{
                    return error;
                })
            });
            return result;
        });
    }
    // ( source, args.{ where, id } )
    static async GetMap( _, { id, where } ){
        // Check to make sure we got either one or the other, not both
        if (id && where) {
            throw new Error("Cannot specify id and where clause!");
        } 
        else if (id) {    
            // Get the map and the tiles
            const map = await Select("maps", `id="${id}"`);
            const tiles = await Select("tiles", `mapId="${id}"`);
            
            // Make sure we actually got a map
            if (map[0] && tiles) {
                map[0]["tiles"] = tiles;
                return [map[0]];
            }
            // If not, throw an error for graphql to deal with
            else {
                throw new Error("Could not find the given map!"); 
            }
        } 
        else if (where){
            // Get the map and tiles
            const maps = await Select("maps", Where(where));

            // Make sure we actually got a map
            if (maps[0]) {
                for (let i = 0; i < maps.length; i++){
                    maps[i]["tiles"] = await Select("tiles", `mapId="${maps[i]["id"]}"`);
                }
                return maps;
            }
            // If not, throw an error for graphql to deal with
            else {
                throw new Error("Could not find the given map!"); 
            }
        } 
        else {
            throw new Error("Must provide an id or a where clause!");
        }
    }
}

module.exports = Map