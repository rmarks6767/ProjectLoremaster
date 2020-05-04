const { MapInput } = require('../model/inputs/map/mapInput');
const { StatusCode } = require('../model/outputs/statusCode')
const { GraphQLNonNull } = require('graphql'); 
const Map = require('../../repositories/map');

module.exports = {
    createMap: {
        type: StatusCode,
        description: 'a map',
        args: {
            map:{
                name:'map',
                type: new GraphQLNonNull(MapInput),
            }
        },
        resolve: Map.CreateMap.bind(Map)
    }
}