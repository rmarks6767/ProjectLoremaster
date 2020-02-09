const { GraphQLInputObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');
const { FriendInput } = require('./friendInput');

const AccountInput = new GraphQLInputObjectType({
    name: "accountInput",
    fields: {
        userName: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        passwordHash: { type: new GraphQLNonNull(GraphQLString) },
        friends: { type: new GraphQLList(FriendInput)}
    }
})

module.exports = {
    AccountInput
}