var {GraphQLInputObjectType,GraphQLID , GraphQLList,GraphQLString, GraphQLNonNull} = require('graphql');
var {Tile} = require('./tile_input')
const MapInput = new GraphQLInputObjectType({
    name: "mapInput",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        image_link: { type: new GraphQLNonNull(GraphQLString) },
    }
})

module.exports = {
    MapInput
}