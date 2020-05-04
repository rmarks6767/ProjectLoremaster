const { Insert, Select } = require('../sql/sqlFunctions');
const { GenerateId } = require('../extraFunctions/generateId');  

class Map {
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

    static async GetMap(_, { where}){
        
    }
}

module.exports = Map