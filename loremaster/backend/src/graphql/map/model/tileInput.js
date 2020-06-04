const { GraphQLInputObjectType, GraphQLNonNull,GraphQLInt } = require('graphql');
const terrainEnum = require('./terrainEnum');

const tileInput = new GraphQLInputObjectType({
    name: "tileInput",
    fields: {
        height: { type: new GraphQLNonNull(GraphQLInt) },
        width: { type: new GraphQLNonNull(GraphQLInt) },
        x: { type: new GraphQLNonNull(GraphQLInt) },
        y: { type: new GraphQLNonNull(GraphQLInt) },
        type: { type: new GraphQLNonNull(terrainEnum) }
    }
})

module.exports = tileInput
