const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql');
const friendGraph = require("./friendGraph");

const accountGraph = new GraphQLObjectType({
    name: "account",
    description: "The account of a given person",
    fields: () => ({
        userName: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        friends: { type: new GraphQLList(friendGraph)}
    })
});

module.exports = accountGraph