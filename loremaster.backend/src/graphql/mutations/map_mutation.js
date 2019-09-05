const mapRepo = require('../../repositories/map_repo');
const { MapInput } = require('../model/inputs/map_input');
const { StatusCode } = require('../model/outputs/status_code')
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