var {GraphQLObjectType, GraphQLID , GraphQLList,GraphQLString, GraphQLNonNull} = require('graphql');
var {Tile} = require('./tile')
const Map = new GraphQLObjectType({
    name: "map",
    description: "a map object",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        image_link: { type: new GraphQLNonNull(GraphQLString) },
        tiles: { type: new GraphQLList(Tile) }
    }
})

module.exports = {
    Map
}