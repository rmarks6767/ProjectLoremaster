var { GraphQLObjectType, GraphQLList, GraphQLNonNull } = require('graphql');
const { mapData } = require('./mapData');
const { tile } = require('./tile');

const map = new GraphQLObjectType({
    name: "map",
    description: "a map object",
    fields: {
        mapData: new GraphQLNonNull(mapData), 
        tiles: new GraphQLList(tile)
    }
})

module.exports = {
    map
}