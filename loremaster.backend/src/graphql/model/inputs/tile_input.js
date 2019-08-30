var {GraphQLInputObjectType, GraphQLID, GraphQLNonNull,GraphQLInt} = require('graphql');
var {TerrainEnum} = require('../outputs/terrain_enum');
const TileInput = new GraphQLInputObjectType({
    name: "tileInput",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        height: { type: new GraphQLNonNull(GraphQLInt) },
        width: { type: new GraphQLNonNull(GraphQLInt) },
        x: { type: new GraphQLNonNull(GraphQLInt) },
        y: { type: new GraphQLNonNull(GraphQLInt) },
        type: { type: new GraphQLNonNull(TerrainEnum) }
    }
})

module.exports = {
    TileInput
}