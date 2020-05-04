const { AndInput } = require('../../model/inputs/matrixWheres/and');
const { map } = require('../../model/outputs/map');
const { GraphQLString, GraphQLList } = require('graphql'); 
const { Where } = require('../../../extraFunctions/linqConstruction');

const mapQuery = {
    name: "map",
    description: "a map",
    type: new GraphQLList(map),
    args: {
        id: {
            name: 'id',
            type: GraphQLString
        },
        where: {
            name: 'where',
            type: AndInput
        }
    },
    resolve: async (source, args, root, ast) => {
        // Check to make sure we got either one or the other, not both
        if (args.id && args.where) {
            throw new Error("Cannot specify id and where clause!");
        } 
        else if (args.id) {    
            // Get the map and the tiles
            const map = await Select("maps", `id="${args.id}"`);
            const tiles = await Select("tiles", `mapId="${args.id}"`);
            
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
        else if (args.where){
            // Get the map and tiles
            const maps = await Select("maps", Where(args.where));

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

module.exports = {
    mapQuery
}