const {InsertMap} = require('../../repositories/map_repo')
const { MapInput } = require("../model/inputs/map_input");
const { Map } = require("../model/outputs/map")

const createMap = {
    type: Map,
    description: "a map",
    args: {
        map:{
            name:"map",
            type: MapInput,
        }
    },
    resolve: () => {
        console.log(args);
        
        return InsertMap(args)
    }
}

module.exports = {
    createMap
}