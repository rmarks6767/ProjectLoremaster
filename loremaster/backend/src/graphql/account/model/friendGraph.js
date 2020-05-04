const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const friendGraph = new GraphQLObjectType({
    name: "friend",
    description: "A friend on a given account",
    fields: () => ({
        userName: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) }
    })
});

module.exports = friendGraph