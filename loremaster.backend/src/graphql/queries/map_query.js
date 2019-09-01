var { Map } = require("../model/outputs/map");

const mapQuery = {
    type: Map,
    description: "a map",
    resolve: function() {
        return {
            id: "gg"
        }
    }
}

module.exports = {
    mapQuery
}