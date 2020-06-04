const { GraphQLInputObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');
const tileInput = require('./tileInput')

const mapInput = new GraphQLInputObjectType({
    name: "mapInput",
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        imageLink: { type: new GraphQLNonNull(GraphQLString) },
        tiles: { type: new GraphQLList(tileInput)}
    }
})

module.exports = mapInput