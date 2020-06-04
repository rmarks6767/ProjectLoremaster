const { GraphQLInputObjectType, GraphQLList } = require('graphql');
const RequestFilter = require('./requestFilter'); 

const Or = new GraphQLInputObjectType({
    name: "OR",
    description: "Used to compare a bunch of things in a sql command",
    fields: {
        or: { type: new GraphQLList(RequestFilter) }
    }
})

module.exports = Or