const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql');
const { friend } = require("./friend");

const account = new GraphQLObjectType({
    name: "account",
    description: "The account of a given person",
    fields: () => ({
        userName: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        passwordHash: { type: new GraphQLNonNull(GraphQLString) },
        friends: { type: new GraphQLList(friend)}
    })
});

module.exports = {
    account
}