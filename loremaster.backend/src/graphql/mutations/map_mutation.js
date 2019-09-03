const { InsertMap, InsertTiles } = require('../../repositories/map_repo')
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
        var mapStatusCode = InsertMap(params.map);
        var tilesStatusCode = InsertTiles(params.map.tiles);
        if (mapStatusCode == tilesStatusCode){
            return mapStatusCode;
        }  
        console.log(mapStatusCode);
        console.log(tilesStatusCode);
        return null;
    }
}

module.exports = {
    createMap
}