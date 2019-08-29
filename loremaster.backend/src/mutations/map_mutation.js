var {InsertMap} = require('../repositories/map_repo')
var { Map } = require("../model/outputs/map");
var { MapInput } = require("../model/inputs/map_input");

const createMap = {
    type: Map,
    description: "a map",
    args: {
        map:{
            name:"map",
            type: MapInput,
        }
    },
    reslove: (_, {map}) => {
        //MAP IS OUR OBJECT NOW (RIvER SIAD SO)
        return InsertMap(map)
    }
}

module.exports = {
    createMap
}