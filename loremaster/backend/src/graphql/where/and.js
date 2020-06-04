const { GraphQLInputObjectType, GraphQLList } = require('graphql');
const Or = require('./or'); 

const And = new GraphQLInputObjectType({
    name: "AND",
    description: "Used to and a bunch of things in sql commands",
    fields: {
        and: { type: new GraphQLList(Or) }
    }
})

module.exports = And
