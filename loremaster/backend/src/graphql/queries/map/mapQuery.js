const { AndInput } = require('../../model/inputs/matrixWheres/and');
const { map } = require('../../model/outputs/map');
const { GraphQLString } = require('graphql'); 
const { Select } = require('../../../repositories/dynamicRepo');
const { Where } = require('../../../sql/linqConstruction');
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
            
            if (map[0] && tiles) {
                console.log(`[${map}] and [${tiles}]`);
                map[0]["tiles"] = tiles;
            }
            return map[0];
        } else if (args.where){
            const map = await Select("maps", Where(args.where));
            const tiles = await Select("tiles", Where(args.where));
            
            if (map[0] && tiles) {
                console.log(`[${map}] and [${tiles}]`);
                map[0]["tiles"] = tiles;
            }
            return map[0];
        } else {
            throw new Error("Must provide an id or a where clause!");
        }
    }
}

module.exports = {
    mapQuery
}