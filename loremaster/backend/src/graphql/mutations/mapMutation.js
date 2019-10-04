const mapRepo = require('../../repositories/mapRepo');
const { MapInput } = require('../model/inputs/mapInput');
const { StatusCode } = require('../model/outputs/statusCode')
const { GraphQLNonNull } = require('graphql'); 

const createMap = {
    type: StatusCode,
    description: 'a map',
    args: {
        map:{
            name:'map',
            type: new GraphQLNonNull(MapInput),
        }
    },
    resolve: mapRepo.InsertMap.bind(mapRepo)
}

module.exports = {
    createMap
}