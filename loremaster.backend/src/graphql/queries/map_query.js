var { Map } = require("../model/outputs/map");

const mapQuery = {
    type: Map,
    description: "a map",
    resolve: () => {
        return {
            id: "gg"
        }
    }
}

module.exports = {
    mapQuery
}