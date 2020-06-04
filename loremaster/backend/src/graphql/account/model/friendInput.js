const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const friendInput = new GraphQLInputObjectType({
    name: "friendInput",
    fields: {
        userName: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) }
    }
})

module.exports = friendInput