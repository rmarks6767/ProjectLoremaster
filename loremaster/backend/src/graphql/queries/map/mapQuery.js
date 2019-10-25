const { AndInput } = require('../../model/inputs/matrixWheres/and');
const { map } = require('../../model/outputs/map');
const { GraphQLString } = require('graphql'); 
const { Select } = require('../../../repositories/dynamicRepo');

const mapQuery = {
    name: "map",
    description: "a map",
    type: map,
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
        if (args.id && args.where) {
            throw new Error("Cannot specify id and where clause!");
        } else if (args.id) {    
            const map = await Select("maps", `id="${args.id}"`);
            const tiles = await Select("tiles", `mapId="${args.id}"`);
            
            map[0]["tiles"] = tiles;
            
            return map[0];
        } else if (args.where){

        } else {
            throw new Error("Must provide an id or a where clause!");
        }
    }
}

module.exports = {
    mapQuery
}