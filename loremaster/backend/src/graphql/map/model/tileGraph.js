const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt } = require('graphql');
const terrainEnum = require('./terrainEnum')

const tileGraph = new GraphQLObjectType({
    name: "tile",
    description: "a tile object",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        mapId: { type: new GraphQLNonNull(GraphQLID) },
        height: { type: new GraphQLNonNull(GraphQLInt) },
        width: { type: new GraphQLNonNull(GraphQLInt) },
        x: { type: new GraphQLNonNull(GraphQLInt) },
        y: { type: new GraphQLNonNull(GraphQLInt) },
        type: { type: new GraphQLNonNull(terrainEnum) }
    })
})

module.exports = tileGraph