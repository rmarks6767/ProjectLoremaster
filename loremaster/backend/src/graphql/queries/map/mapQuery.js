const { AndInput } = require('../../model/inputs/matrixWheres/and');
const { map } = require('../../model/outputs/map');
const { GraphQLString, GraphQLList } = require('graphql'); 
const Map = require('../../../repositories/map')

module.exports = {
    mapQuery: {
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
        resolve: Map.GetMap.bind(Map)
    }
}