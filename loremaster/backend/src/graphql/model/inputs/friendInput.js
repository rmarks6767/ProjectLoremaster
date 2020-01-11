const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const FriendInput = new GraphQLInputObjectType({
    name: "friendInput",
    fields: {
        userName: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) }
    }
})

module.exports = {
    FriendInput
}