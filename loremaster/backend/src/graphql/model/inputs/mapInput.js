var { GraphQLInputObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');
var { TileInput } = require('./tileInput')

const MapInput = new GraphQLInputObjectType({
    name: "mapInput",
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        image_link: { type: new GraphQLNonNull(GraphQLString) },
        tiles: { type: new GraphQLList(TileInput)}
    }
})

module.exports = {
    MapInput
}