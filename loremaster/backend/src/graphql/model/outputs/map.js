const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInt } = require('graphql');
const { TerrainEnum } = require('./enums/terrainEnum')

const map = new GraphQLObjectType({
    name: "map",
    description: "The entire map",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        imageLink: { type:new GraphQLNonNull(GraphQLString) },
        name: { type:new GraphQLNonNull(GraphQLString) },
        tiles: { type: new GraphQLList(
            new GraphQLObjectType({
                name: "tile",
                description: "a tile object",
                fields: () => ({
                    id: { type: new GraphQLNonNull(GraphQLID) },
                    mapId: { type: new GraphQLNonNull(GraphQLID) },
                    height: { type: new GraphQLNonNull(GraphQLInt) },
                    width: { type: new GraphQLNonNull(GraphQLInt) },
                    x: { type: new GraphQLNonNull(GraphQLInt) },
                    y: { type: new GraphQLNonNull(GraphQLInt) },
                    type: { type: new GraphQLNonNull(TerrainEnum) }
                })
            })
        )}
    })
})

module.exports = {
    map
}