const { InsertMap } = require('../../repositories/map_repo')
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
    resolve (root, params, options){        
        const statusCode = InsertMap(params.map);
        console.log(statusCode)
        return statusCode
    }
}

module.exports = {
    createMap
}