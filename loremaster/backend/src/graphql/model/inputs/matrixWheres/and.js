const { GraphQLInputObjectType, GraphQLList } = require('graphql');
const { OrInput } = require('../../inputs/matrixWheres/or'); 

const AndInput = new GraphQLInputObjectType({
    name: "AND",
    description: "Used to and a bunch of things in sql commands",
    fields: {
        and: { type: new GraphQLList(OrInput) }
    }
})

module.exports = {
    AndInput
}