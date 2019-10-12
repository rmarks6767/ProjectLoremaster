const { AND } = require('../model/inputs/matrix_wheres/and');
const { map } = require('../model/outputs/map');
const { GraphQLNonNull, GraphQLString } = require('graphql'); 
const { GetMapById } = require('../../repositories/map_repo');
//const { GetProperties } = require('../../extra_functions/get_properties');

const mapQuery = {
    type: map,
    description: 'a map',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        where: {
            name: 'where',
            type: new GraphQLNonNull(AND)
        }
    },
    resolve: (source, args, root, ast) => {
        return GetMapById(args.id);
    }
}

module.exports = {
    mapQuery
}