const { GraphQLInputObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');
const friendInput  = require('./friendInput');

const accountInput = new GraphQLInputObjectType({
    name: "accountInput",
    fields: {
        userName: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        friends: { type: new GraphQLList(friendInput)}
    }
})

module.exports = accountInput