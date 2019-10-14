const { AndInput } = require('../../model/inputs/matrixWheres/and');
const { map } = require('../../model/outputs/map');
const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql'); 
const { SELECT } = require('../../../repositories/dynamicRepo');

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
        console.log(ast.selectionSet);
        if (args.id && args.where) {
            throw new Error("Cannot specify id and where clause!");
        } else if (args.id) {    
            const map = await SELECT("maps", `id="${args.id}"`);
            const tiles = await SELECT("tiles", `mapId="${args.id}"`);
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