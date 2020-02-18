var {GraphQLInputObjectType, GraphQLNonNull,GraphQLInt} = require('graphql');
var {TerrainEnum} = require('../../outputs/enums/terrainEnum');

const TileInput = new GraphQLInputObjectType({
    name: "tileInput",
    fields: {
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