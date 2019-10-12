const { GraphQLInputObjectType, GraphQLList } = require('graphql');
const { RequestFilterInput } = require('../../inputs/matrix_wheres/request_filter'); 

const RequestFilterInput = new GraphQLInputObjectType({
    name: "Or",
    description: "Used to compare a bunch of things in a sql command",
    fields: {
        or: { type: new GraphQLList(RequestFilterInput) }
    }
})

module.exports = {
    OrInput  
}