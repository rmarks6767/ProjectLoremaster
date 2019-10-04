const { AndInput } = require('../../model/inputs/matrixWheres/and');
const { map } = require('../../model/outputs/map/map');
const { mapData } = require('../../model/outputs/map/mapData');
const { tile } = require('../../model/outputs/map/tile');
const { GraphQLString, GraphQLList } = require('graphql'); 
const { SELECT } = require('../../../repositories/dynamicRepo');
const { GetMapById } = require('../../../repositories/mapRepo');

const mapQuery = {
    type: map,
    description: "a map",
    fields: () => ({
        mapData :{
            type: mapData,
            description: 'a map',
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
            resolve: (source, args, root, ast) => {
                if (args.id && args.where) {
                    throw new Error("Cannot specify id and where clause!");
                } else if (args.id) {    
                    //return GetMapById(args.id);
                    return SELECT("maps", `id="${args.id}"`);
                } else if (args.where){
        
                } else {
                    throw new Error("Must provide an id or a where clause!");
                }
            }
        },
        tiles: {
            type: new GraphQLList(tile),
            description: "The tiles of a given map",
            args: {
                mapId: {
                    name: 'mapId',
                    type: GraphQLString
                },
                where: {
                    name: 'where',
                    type: AndInput
                }
            },
            resolve: (source, args, root, ast) => {
                if (args.mapId && args.where) {
                    throw new Error("Cannot specify id and where clause!");
                } else if (args.mapId) {    
                    return SELECT("tiles", `map_id="${args.mapId}"`);
                } else if (args.where){
        
                } else {
                    throw new Error("Must provide an id or a where clause!");
                }
            }
        }
    })
    
}

module.exports = {
    mapQuery
}