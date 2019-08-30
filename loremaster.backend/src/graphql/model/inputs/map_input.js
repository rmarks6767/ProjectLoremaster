var { GraphQLInputObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');
var { TileInput } = require('./tile_input')
const MapInput = new GraphQLInputObjectType({
    name: "mapInput",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        image_link: { type: new GraphQLNonNull(GraphQLString) },
        tiles: { type: new GraphQLList(TileInput)}
    }
})

module.exports = {
    MapInput
}