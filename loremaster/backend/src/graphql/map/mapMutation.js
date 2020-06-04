const mapInput = require('./model/mapInput');
const StatusCode = require('../statusCode/statusCode')
const Map = require('./map');
const { GraphQLNonNull } = require('graphql'); 

module.exports = {
    createMap: {
        type: StatusCode,
        description: 'a map',
        args: {
            map:{
                name:'map',
                type: new GraphQLNonNull(mapInput),
            }
        },
        resolve: Map.CreateMap.bind(Map)
    }
}