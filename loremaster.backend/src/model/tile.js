var {GraphQLObjectType, GraphQLID, GraphQLNonNull,GraphQLInt} = require('graphql');
var {TerrainEnum} = require('./terrain_enum');
export const Tile = new GraphQLObjectType({
    name: "tile",
    description: "a tile object",
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        height: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        width: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        x: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        y: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        type: {
            type: new GraphQLNonNull(TerrainEnum)
        }
    }
})