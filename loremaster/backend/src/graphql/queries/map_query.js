const { AndInput } = require('../model/inputs/matrix_wheres/and');
const { map } = require('../model/outputs/map');
const { GraphQLString } = require('graphql'); 
const { GetMapById } = require('../../repositories/map_repo');
const { SELECT, SELECTJOIN } = require('../../sql/sql_commands');

const mapQuery = {
    type: map,
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
            //return SELECT("maps", `ID="${args.id}"`);
            return SELECTJOIN("maps", "tiles", "ID", "map_id", `maps.ID="${args.id}"`);
        } else if (args.where){

        } else {
            throw new Error("Must provide an id or a where clause!");
        }
    }
}

module.exports = {
    mapQuery
}