const { GraphQLInputObjectType, GraphQLList } = require('graphql');
const { RequestFilterInput } = require('../../inputs/matrix_wheres/request_filter'); 

const OrInput = new GraphQLInputObjectType({
    name: "OR",
    description: "Used to compare a bunch of things in a sql command",
    fields: {
        or: { type: new GraphQLList(RequestFilterInput) }
    }
})

module.exports = {
    OrInput  
}