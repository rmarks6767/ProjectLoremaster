const { MapInput } = require('../model/inputs/map/mapInput');
const { StatusCode } = require('../model/outputs/statusCode')
const { GraphQLNonNull } = require('graphql'); 
const { Insert } = require('../../repositories/dynamicRepo');
const { GenerateId } = require('../../extraFunctions/generateId');  

const createMap = {
    type: StatusCode,
    description: 'a map',
    args: {
        map:{
            name:'map',
            type: new GraphQLNonNull(MapInput),
        }
    },
    resolve: async (source, args, root, ast) => {
        if (args.map) {
            // Get the tiles from the object
            const tiles = args.map["tiles"];
            const mapId = GenerateId();
            
            delete args.map.tiles;

            args.map["id"] = mapId;
            
            const mapResp = await Insert(
                "maps", 
                Object.keys(args.map),
                Object.values(args.map)
            ).catch((error) =>{
                throw error;
            }).then((result) => {
                return result;
            });
            
            await tiles.forEach(async tile => {
                tile["id"] = GenerateUuid()
                tile["mapId"] = mapId
                await Insert(
                    "tiles",
                    Object.keys(tile),
                    Object.values(tile)
                ).catch((error) =>{
                    return error;
                }).then((result) => {
                    return result;
                });
            });


            if (mapResp.code == 200) {
                return mapResp;
            }
            else {
                return new Error("Error entering the map into the db!");
            }
        } else {
            return new Error("Must provide a map input!");
        }
    }
}

module.exports = {
    createMap
}